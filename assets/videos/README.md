Use ffmpeg to generate video files with mime type application/x-mpegURL used for hls live streaming the video in chunks.

```bash
ffmpeg -i input.mp4 -profile:v baseline -level 3.0 -s 640x360 -start_number 0 -hls_time 10 -hls_list_size 0 -f hls index.m3u8
```

```bash
ffmpeg -i "Salty Wings - Summersite - Whitehaven Couple Wide Qld endframe V3.mp4" -profile:v baseline -level 3.0 -s 640x360 -start_number 0 -hls_time 10 -hls_list_size 0 -f hls index.m3u8
```
