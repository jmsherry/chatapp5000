document.addEventListener('DOMContentLoaded', function(){
        const socket = io();
        const messageInput = document.querySelector('#message');
        const messagesList = document.querySelector('#messages');
        document.querySelector('form').addEventListener('submit', function(e){
          e.preventDefault();
          console.log(messageInput);
          socket.emit('chat message', messageInput.value);
          messageInput.value = '';
        });

        socket.on('chat message', function(msg){
          console.log('message', msg);
          const li = document.createElement('li');
          li.textContent = msg;
          messagesList.append(li);
          window.scrollTo(0, document.body.scrollHeight);
        });

      });