import '../css/base.css';
import '../css/Article.css';

const browserLang = window.navigator.language.slice(0, 2);
const input = window.location.pathname.substring(9);
const customLang = new URLSearchParams(window.location.search).get('lang');

function Article() {
  fetch(`https://${customLang ? customLang : browserLang}.wikipedia.org/api/rest_v1/page/summary/${input}`)
    .then(async res => {
      if (res.status === 200) {
        let json = await res.json();

        document.querySelector('.article_title').innerText = json.title;
        document.querySelector('.article_text').innerHTML = json.extract_html;
        document.querySelector('.article_copy').innerText = json.description ?? 'From Wikipedia, the free encyclopedia';
        document.querySelector('.article_footer').innerText = `This page was last edited on ${new Date(json.timestamp).toLocaleString()}`;
      }
      else
        document.querySelector('.article_title')
          .innerText = res.statusText;
    });

  return (
    <div className='article' role='article'>
      <h1 className='article_title'></h1>
      <hr className='article_divider' />
      <p className='article_copy'></p>
      <div className='article_text'></div>
      <p className='article_footer'></p>
    </div>
  );
}

export default Article;
