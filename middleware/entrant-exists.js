// import axios from 'axios';

import EventBus from '@/assets/js/EventBus.js';

export default function({ store, route }) {
  if (route.query.hash !== undefined) {
    // check that hash is valid
    if (route.query.hash.length === 36) {
      // store.state.entrant.hash = route.query.hash;
    } else {
      const errorMessage = 'Invalid entrant hash';

      // Invalid entrant hash
      EventBus.$emit('notification', {
        type: 'error',
        message: errorMessage,
      });
      console.log(`${errorMessage}: ${route.query.hash}`);
    }

    // // Check if entrant exists
    // const url = `${process.env.API_BASE_URL}/${process.env.API_KEY}/api/entrant/byhash/${
    //   route.query.hash
    // }`;

    // axios
    //   .get(url, {
    //     params: {
    //       secret: process.env.API_SECRET,
    //     },
    //   })
    //   .then(() => {
    //     // Entrant exists - 200
    //     // Set entrant hash
    //     store.state.entrant.hash = route.query.hash;
    //   })
    //   .catch(error => {
    //     // Entrant not found - 404
    //     EventBus.$emit('notification', {
    //       type: 'error',
    //       message: 'Entrant not found.',
    //     });
    //     console.log(error);
    //   });
  }
}
