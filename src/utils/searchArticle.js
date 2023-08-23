function searchArticle() {
    const input = document.getElementById('searcharticle-input').value;
    if (!input) return null;

    window.location.href = `/article/${input}`;
}

export default searchArticle;