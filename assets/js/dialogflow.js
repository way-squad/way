
  function openDialogflowChat() {
    const dfMessenger = document.querySelector('#df-messenger');
    dfMessenger.setAttribute("chat-title", "WAYt");
    dfMessenger.setAttribute("agent-id", "ID_DA_AGENTE");
    dfMessenger.setAttribute("language-code", "pt-BR");
    dfMessenger.setAttribute("project-id", "wayy-387917");
  }

  document.addEventListener("DOMContentLoaded", function(event) {
    openDialogflowChat();
  });
