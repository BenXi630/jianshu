import { createGlobalStyle } from 'styled-components';

const IconFont  = createGlobalStyle`
  @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1561885237710'); /* IE9 */
    src: url('./iconfont.eot?t=1561885237710#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAT4AAsAAAAACaQAAASpAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDKgqGRIU3ATYCJAMUCwwABCAFhG0HTxtCCCMRNnNvMpH988B2jhaGICl33NWXS97p8bfQ0DQ6pYbwI+k9R1AtW8/u3n0MDlSIiuxyebJQKAqP0CheOoxGmGwEQ3XaTKbeGtqkAlJw71xJZyUn/+hsbYpbRkUoluQ8+C4fnuQHOx9oGwB/3E/9q/OB5QOaS0Z4NOAEBxQVVGCzWYFM1Lccznh1bifQtkwTvOw9AwGbQusXiGefGA3YYkqlBB+akjpnahELwKyZXklXeXO/H3+7wUZSZdrQqwSnOGD7VuBtE6IyqMJsBLD604OZRcYOoBBPucZHgPzgDqQtxTM5BjR1faKvoMnbJgaDYI3Za2GU/uW1UYQsETVN2AXcaajwKWAyQ5ExyAWITEAug6gJQhLOqQ1t9AhWdZdo0pU++Um/eNVszjApaWFObaZ+4Vbn4uEgcwZypGLBIW3SHD2iQdHbGAEAB+Q44Gi+DqsolCr3kpb4ygSgTmLEGQgpgDrRPAVR1bQQPto7oUy+d49Cp1Owu3cD774shFmjiUlAok4Ik9u6useFcBotkOdzlLagvygl79MhjUZOtLx3DyfoNngrMV2Vk0+X6BnNaTRK+w2LdhGNVowQcWiRZbvGRgQDzRPNAls6R8dFQrv7lM3HVkST6E5CLTOiPZKpZrbmQRX4gsnmrVi7CN7WIkidUN1xDoZ2LymPrai29Ii1Co0ot7V0OLJzJvD0oxjhMz0P29sCOxTHhNu6RdrbCaHRgwSXW6qOt+K5GaMDLcXaByfZxyRb05n+WOfmnTPVgcx22plq5GSucMzD1vx1BCXvipjQH3GlT0rSoDJygJtPko8bcPvfZMjwv0jjWxH2yfkbVKdcq95Hg4Qt7F342mLQpiMbPLw+ylWNwAV4/G+9eOqVus2peSGfnD/00n1L31r123XkwoHZQnhtLUM9zx51Xr3aafEQrUKdoc0+T/1tfrMpKVzq7zipZHi4hPBIxIBKEKE7NDgT/OPlHZPoeDrjx4JkT6V45Ke4hOeVmIea8I2a5C7Rp6QsCZzpt2qy/H0GZUKM6ytY7VrtN9dNUo2jAop0tSlB9gON57F/7Ln9NX41hp62g3rTEZPwKPs3+Z1E3Jqgnqfe1z1U/fidX3SesLVK6zDJxOaUanSIlJWGvL7TXYzvKCgCAADAYKAD5BIb0XNURL6fR5C0WQnpfma/AT9LdiMjeSy/gTWxAj6su43A8d9YQDvWt8KqzfqoWDUriszRVFURs02maK68PBJ/QlvX8DFFGXvaj3hWO53QNAshaViCrGkFVXA7UOnYh1rTCbRtc5ndMZEDkCgtbKlDEIbmIel7h2zoGqrgnkBl7h3UhoGg7QEKLNmxFsmFw3UhVJpg/IM3+8aGRgsv80H2WlCiHJfwIYneA01ZJyMDbSR9jIi3bVUZWPYVerQbLcsOh+yBjJZO9eiqivPuVJp9TQpwIYRKE4x/8Gbf2K6vRerzD7LXglKSU6L+kETfODRlXQM1CLdaOefSOt62VWXSi2VfoQc9LXpwhyO/UyCjpWvhP7oK1+K6wnJ88XqNWX91Xu3oCpIggkyQGbKAZIdpdBf+/FYwbnbC4O2Y/I/bz5uO0ScJAAAA') format('woff2'),
    url('./iconfont.woff?t=1561885237710') format('woff'),
    url('./iconfont.ttf?t=1561885237710') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('./iconfont.svg?t=1561885237710#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .iconAa:before {
    content: "\e636";
  }

  .iconfangdajing:before {
    content: "\e637";
  }

  .iconyanxianbi:before {
    content: "\e613";
  }
`
export default IconFont;