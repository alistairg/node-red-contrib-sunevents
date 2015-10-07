module.exports = function(RED) {

  //////////
  // GLOBAL CONFIG
  function Location(config) {

        RED.nodes.createNode(this, config);
        this.latitude = config.latitude;
        this.longitude = config.longitude;
        var node = this;

    }

  //////////
  // REGISTER NODES
  RED.nodes.registerType("location",Location);

}
