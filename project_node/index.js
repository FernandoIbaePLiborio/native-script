class Message {
  constructor(text = '', created = Date.now()) {
    this.text = text;
    this.created = created;
  }
}

var emptyMessage = new Message();
var textMessage = new Message('Yesterday message', Date.now() - 86400);

console.log(emptyMessage);
console.log(textMessage);