document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('goChatsBtn');
    if (btn) {
        btn.addEventListener('click', function() {
            window.location.href = '/chats';
        });
    }
});
