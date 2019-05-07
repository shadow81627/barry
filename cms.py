from __future__ import print_function
import pickle
import os.path
from googleapiclient.discovery import build
from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request

import json

# If modifying these scopes, delete the file token.pickle.
SCOPES = ["https://www.googleapis.com/auth/spreadsheets.readonly"]

SAMPLE_SPREADSHEET_ID = "1G-AzSxFNwBLJH0siF3Oq1EqC0lsXl83Uenbtn0ry8es"
SAMPLE_RANGE_NAME = "Sheet1!A1:B5"


def main():
    """Shows basic usage of the Sheets API.
    Prints values from a sample spreadsheet.
    """
    creds = None
    # The file token.pickle stores the user's access and refresh tokens, and is
    # created automatically when the authorization flow completes for the first
    # time.
    if os.path.exists("token.pickle"):
        with open("token.pickle", "rb") as token:
            creds = pickle.load(token)
    # If there are no (valid) credentials available, let the user log in.
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file(
                "credentials.json", SCOPES
            )
            creds = flow.run_local_server()
        # Save the credentials for the next run
        with open("token.pickle", "wb") as token:
            pickle.dump(creds, token)

    service = build("sheets", "v4", credentials=creds)

    # Call the Sheets API
    sheet = service.spreadsheets()
    result = (
        sheet.values()
        .get(spreadsheetId=SAMPLE_SPREADSHEET_ID, range=SAMPLE_RANGE_NAME)
        .execute()
    )
    values = result.get("values", [])

    if not values:
        print("No data found.")
    else:
        # Found data print to JSON file
        output = {}

        for row in values:

            # dot seperated str keys to nested dict
            def put(d, keys, item):
                if "." in keys:
                    key, rest = keys.split(".", 1)
                    if key not in d:
                        d[key] = {}
                    put(d[key], rest, item)
                else:
                    d[keys] = item

            put(output, *row)

        OUTPUT_FILE_PATH = 'data.json'

        with open(OUTPUT_FILE_PATH, 'w') as outfile:
            json.dump(output, outfile)


if __name__ == "__main__":
    main()
