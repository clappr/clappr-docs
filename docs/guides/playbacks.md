# Playbacks

A Clappr playback is an abstraction to represent a generic playback. It refers to the video playback experience created using the Clappr media player framework, it's like an interface to be implemented by subclasses.

![Clappr Playback Interface](../../static/img/clappr_playback.png)

It typically includes features such as video playback controls (e.g., play, pause, seek, volume), support for captions and subtitles, customizable user interface (UI) components, and options for handling video quality. Clappr playback can be integrated into websites, applications, or other digital platforms to enable video playback for end users. Developers can use Clappr's APIs and plugins to customize the playback behavior, appearance, and functionality to suit their specific requirements. Since playback plugins are intended to support a specific type of media, the plugin is extended from some other existing playback plugin or the base playback class.

More information about the Playback base class in the Clappr-core repository [clappr-core repository](https://github.com/clappr/clappr-core/blob/master/src/base/playback/playback.js).

## HLSJS Playback

A Clappr playback to play HTTP Live Streaming (HLS) based on the hls.js.
### Usage

You can use it from JSDelivr: 
`https://cdn.jsdelivr.net/npm/@clappr/hlsjs-playback@latest/dist/hlsjs-playback.min.js`

Or as a package: 
`yarn add @clappr/hlsjs-playback`

Then just add HlsjsPlayback into the list of plugins of your player instance:

```javascript
var player = new Clappr.Player(
  {
    source: 'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8',
    plugins: [HlsjsPlayback],
  });
```
### Configuration

```javascript
    var player = new Clappr.Player(
  {
    source: 'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8',
    plugins: [HlsjsPlayback],
    hlsUseNextLevel: false,
    hlsMinimumDvrSize: 60,
    hlsRecoverAttempts: 16,
    hlsPlayback: {
      preload: true,
      customListeners: [],
    },
    playback: {
      extrapolatedWindowNumSegments: 2,
      triggerFatalErrorOnResourceDenied: false,
      hlsjsConfig: {
        // hls.js specific options
      },
    },
  });
```

See more: [hlsjs-playback repository](https://github.com/clappr/hlsjs-playback)

### Example
## Dash Shaka Playback
See more: [shaka-player repository](https://github.com/clappr/clappr-core/blob/master/src/base/playback/playback.js) | [](https://github.com/video-dev/hls.js)

### Playback

### Example

## HTML5 Video Playback

HTML5 video playback is a built-in feature of modern web browsers that allows you to play video content directly in web pages using the HTML5 video element without the need for external plugins.

See more: [html5 playback repository](https://github.com/clappr/clappr-core/blob/master/src/playbacks/html5_video/html5_video.js)
