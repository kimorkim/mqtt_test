import mqtt from 'mqtt';

export default class NotificationManager {
    constructor(opts = {}) {
        const { url, content } = opts;
        this._WebContent = content;
        this._url = url;
    }

    set webContent(newContent) {
        if(newContent) {
            this._webContent = newContent;
        }
    }

    get webContent() {
        return this._webContent;
    }

    set url(newUrl) {
        if(newUrl) {
            this._url = newUrl;
        }
    }

    get url() {
        return this._url;
    }

    connect() {
        // var client  = mqtt.connect('mqtt://test.mosquitto.org')
        var client = mqtt.connect(this.url);
 
        client.on('error', (e)=> {
            console.log(e);
        });

        client.on('connect', ()=> {
            client.subscribe('presence')
            client.publish('presence', 'Hello mqtt')
        });
         
        client.on('message', (topic, message)=> {
            console.log(topic);
            console.log(message.toString())
            // client.end()
        });
    }
}