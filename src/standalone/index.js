import StandaloneLayout from "./standalone-layout"

let StandaloneLayoutPlugin = function() {
  return {
    components: {
      StandaloneLayout
    }
  }
}

module.exports = function () {
  return [
    StandaloneLayoutPlugin
  ]
}
