var searchInput = document.querySelector('.search-input');
var searchBtn = document.querySelector('.search-btn');
var first = document.querySelector('.first')
var second = document.querySelector('.second')
var third = document.querySelector('.third')
var fourth = document.querySelector('.fourth')
var fifth = document.querySelector('.fifth')
var sixth = document.querySelector('.sixth')
var seventh = document.querySelector('.seventh')
var eighth = document.querySelector('.eighth')
var ninth = document.querySelector('.ninth')
var tenth = document.querySelector('.tenth')
var main = document.querySelector('main')
var footer = document.querySelector('footer')

searchBtn.onclick = ()=>{
    main.style.display = 'block'
    footer.style.display = 'block'
    first.classList.add("checked")
    second.classList.remove("checked")
    third.classList.remove("checked")
    fourth.classList.remove("checked")
    fifth.classList.remove("checked")
    sixth.classList.remove("checked")
    seventh.classList.remove("checked")
    eighth.classList.remove("checked")
    ninth.classList.remove("checked")
    tenth.classList.remove("checked")
    var searchTitle = searchInput.value;
    $.ajax(`https://newsapi.org/v2/everything?q=${searchTitle}&apiKey=98c6dcc256804f67874a7763ab6274c9`).then((res)=>{
    // searchInput.value = "";
    $('#articles-container').text("")
    for (let i = 0; i < 11; i++) {
        //Article Image
        var articleImg = document.createElement('img');
        articleImg.setAttribute("class","article-img");
        articleImg.setAttribute("src",res.articles[i].urlToImage);
        //Article Url for image
        var articleUrlImage = document.createElement('a');
        articleUrlImage.setAttribute("target","_blank");
        articleUrlImage.setAttribute("href",res.articles[i].url);
        articleUrlImage.append(articleImg);
        //Article Author
        var articleauthor = document.createElement('h2');
        articleauthor.setAttribute("class","article-author");
        articleauthor.innerText = res.articles[i].author;
        //Article Published at
        var articlePublished = document.createElement('span');
        articlePublished.setAttribute("class","article-published");
        articlePublished.innerText = res.articles[i].publishedAt;
        //Article Title
        var articleTitle = document.createElement('h3');
        articleTitle.setAttribute("class","article-title");
        articleTitle.innerText = res.articles[i].title;
         //Article Url for title
         var articleUrlTitle = document.createElement('a');
         articleUrlTitle.setAttribute("target","_blank");
         articleUrlTitle.setAttribute("href",res.articles[i].url);
         articleUrlTitle.append(articleTitle);
        //Article Description
        var articleDescription = document.createElement('p');
        articleDescription.setAttribute("class","article-description");
        articleDescription.innerText = res.articles[i].description;
        //Article
        var article = document.createElement('div');
        article.setAttribute("id","article");
        article.append(articleUrlImage,articleauthor,articlePublished,articleUrlTitle,articleDescription)
        $('#articles-container').append(article)
    }   
    console.log(res)
    }).catch((err)=>{
        console.log(err)
    })
}
first.onclick = ()=>{
    first.classList.add("checked")
    second.classList.remove("checked")
    third.classList.remove("checked")
    fourth.classList.remove("checked")
    fifth.classList.remove("checked")
    sixth.classList.remove("checked")
    seventh.classList.remove("checked")
    eighth.classList.remove("checked")
    ninth.classList.remove("checked")
    tenth.classList.remove("checked")
    var searchTitle = searchInput.value;
    $.ajax(`https://newsapi.org/v2/everything?q=${searchTitle}&apiKey=98c6dcc256804f67874a7763ab6274c9`).then((res)=>{
    // searchInput.value = "";
    $('#articles-container').text("")
    for (let i = 0; i < 11; i++) {
        //Article Image
        var articleImg = document.createElement('img');
        articleImg.setAttribute("class","article-img");
        articleImg.setAttribute("src",res.articles[i].urlToImage);
        //Article Url for image
        var articleUrlImage = document.createElement('a');
        articleUrlImage.setAttribute("target","_blank");
        articleUrlImage.setAttribute("href",res.articles[i].url);
        articleUrlImage.append(articleImg);
        //Article Author
        var articleauthor = document.createElement('h2');
        articleauthor.setAttribute("class","article-author");
        articleauthor.innerText = res.articles[i].author;
        //Article Published at
        var articlePublished = document.createElement('span');
        articlePublished.setAttribute("class","article-published");
        articlePublished.innerText = res.articles[i].publishedAt;
        //Article Title
        var articleTitle = document.createElement('h3');
        articleTitle.setAttribute("class","article-title");
        articleTitle.innerText = res.articles[i].title;
         //Article Url for title
         var articleUrlTitle = document.createElement('a');
         articleUrlTitle.setAttribute("target","_blank");
         articleUrlTitle.setAttribute("href",res.articles[i].url);
         articleUrlTitle.append(articleTitle);
        //Article Description
        var articleDescription = document.createElement('p');
        articleDescription.setAttribute("class","article-description");
        articleDescription.innerText = res.articles[i].description;
        //Article
        var article = document.createElement('div');
        article.setAttribute("id","article");
        article.append(articleUrlImage,articleauthor,articlePublished,articleUrlTitle,articleDescription)
        $('#articles-container').append(article)
    }   
    console.log(res)
    }).catch((err)=>{
        console.log(err)
    })
}
second.onclick = ()=>{
    first.classList.remove("checked")
    second.classList.add("checked")
    third.classList.remove("checked")
    fourth.classList.remove("checked")
    fifth.classList.remove("checked")
    sixth.classList.remove("checked")
    seventh.classList.remove("checked")
    eighth.classList.remove("checked")
    ninth.classList.remove("checked")
    tenth.classList.remove("checked")
    var searchTitle = searchInput.value;
    $.ajax(`https://newsapi.org/v2/everything?q=${searchTitle}&apiKey=98c6dcc256804f67874a7763ab6274c9`).then((res)=>{
    // searchInput.value = "";
    $('#articles-container').text("")
    for (let i = 11; i < 21; i++) {
        //Article Image
        var articleImg = document.createElement('img');
        articleImg.setAttribute("class","article-img");
        articleImg.setAttribute("src",res.articles[i].urlToImage);
        //Article Url for image
        var articleUrlImage = document.createElement('a');
        articleUrlImage.setAttribute("target","_blank");
        articleUrlImage.setAttribute("href",res.articles[i].url);
        articleUrlImage.append(articleImg);
        //Article Author
        var articleauthor = document.createElement('h2');
        articleauthor.setAttribute("class","article-author");
        articleauthor.innerText = res.articles[i].author;
        //Article Published at
        var articlePublished = document.createElement('span');
        articlePublished.setAttribute("class","article-published");
        articlePublished.innerText = res.articles[i].publishedAt;
        //Article Title
        var articleTitle = document.createElement('h3');
        articleTitle.setAttribute("class","article-title");
        articleTitle.innerText = res.articles[i].title;
         //Article Url for title
         var articleUrlTitle = document.createElement('a');
         articleUrlTitle.setAttribute("target","_blank");
         articleUrlTitle.setAttribute("href",res.articles[i].url);
         articleUrlTitle.append(articleTitle);
        //Article Description
        var articleDescription = document.createElement('p');
        articleDescription.setAttribute("class","article-description");
        articleDescription.innerText = res.articles[i].description;
        //Article
        var article = document.createElement('div');
        article.setAttribute("id","article");
        article.append(articleUrlImage,articleauthor,articlePublished,articleUrlTitle,articleDescription)
        $('#articles-container').append(article)
    }   
    console.log(res)
    }).catch((err)=>{
        console.log(err)
    })
}
third.onclick = ()=>{
    first.classList.remove("checked")
    second.classList.remove("checked")
    third.classList.add("checked")
    fourth.classList.remove("checked")
    fifth.classList.remove("checked")
    sixth.classList.remove("checked")
    seventh.classList.remove("checked")
    eighth.classList.remove("checked")
    ninth.classList.remove("checked")
    tenth.classList.remove("checked")
    var searchTitle = searchInput.value;
    $.ajax(`https://newsapi.org/v2/everything?q=${searchTitle}&apiKey=98c6dcc256804f67874a7763ab6274c9`).then((res)=>{
    // searchInput.value = "";
    $('#articles-container').text("")
    for (let i = 21; i < 31; i++) {
        //Article Image
        var articleImg = document.createElement('img');
        articleImg.setAttribute("class","article-img");
        articleImg.setAttribute("src",res.articles[i].urlToImage);
        //Article Url for image
        var articleUrlImage = document.createElement('a');
        articleUrlImage.setAttribute("target","_blank");
        articleUrlImage.setAttribute("href",res.articles[i].url);
        articleUrlImage.append(articleImg);
        //Article Author
        var articleauthor = document.createElement('h2');
        articleauthor.setAttribute("class","article-author");
        articleauthor.innerText = res.articles[i].author;
        //Article Published at
        var articlePublished = document.createElement('span');
        articlePublished.setAttribute("class","article-published");
        articlePublished.innerText = res.articles[i].publishedAt;
        //Article Title
        var articleTitle = document.createElement('h3');
        articleTitle.setAttribute("class","article-title");
        articleTitle.innerText = res.articles[i].title;
         //Article Url for title
         var articleUrlTitle = document.createElement('a');
         articleUrlTitle.setAttribute("target","_blank");
         articleUrlTitle.setAttribute("href",res.articles[i].url);
         articleUrlTitle.append(articleTitle);
        //Article Description
        var articleDescription = document.createElement('p');
        articleDescription.setAttribute("class","article-description");
        articleDescription.innerText = res.articles[i].description;
        //Article
        var article = document.createElement('div');
        article.setAttribute("id","article");
        article.append(articleUrlImage,articleauthor,articlePublished,articleUrlTitle,articleDescription)
        $('#articles-container').append(article)
    }   
    console.log(res)
    }).catch((err)=>{
        console.log(err)
    })
}
fourth.onclick = ()=>{
    first.classList.remove("checked")
    second.classList.remove("checked")
    third.classList.remove("checked")
    fourth.classList.add("checked")
    fifth.classList.remove("checked")
    sixth.classList.remove("checked")
    seventh.classList.remove("checked")
    eighth.classList.remove("checked")
    ninth.classList.remove("checked")
    tenth.classList.remove("checked")
    var searchTitle = searchInput.value;
    $.ajax(`https://newsapi.org/v2/everything?q=${searchTitle}&apiKey=98c6dcc256804f67874a7763ab6274c9`).then((res)=>{
    // searchInput.value = "";
    $('#articles-container').text("")
    for (let i = 31; i < 41; i++) {
        //Article Image
        var articleImg = document.createElement('img');
        articleImg.setAttribute("class","article-img");
        articleImg.setAttribute("src",res.articles[i].urlToImage);
        //Article Url for image
        var articleUrlImage = document.createElement('a');
        articleUrlImage.setAttribute("target","_blank");
        articleUrlImage.setAttribute("href",res.articles[i].url);
        articleUrlImage.append(articleImg);
        //Article Author
        var articleauthor = document.createElement('h2');
        articleauthor.setAttribute("class","article-author");
        articleauthor.innerText = res.articles[i].author;
        //Article Published at
        var articlePublished = document.createElement('span');
        articlePublished.setAttribute("class","article-published");
        articlePublished.innerText = res.articles[i].publishedAt;
        //Article Title
        var articleTitle = document.createElement('h3');
        articleTitle.setAttribute("class","article-title");
        articleTitle.innerText = res.articles[i].title;
         //Article Url for title
         var articleUrlTitle = document.createElement('a');
         articleUrlTitle.setAttribute("target","_blank");
         articleUrlTitle.setAttribute("href",res.articles[i].url);
         articleUrlTitle.append(articleTitle);
        //Article Description
        var articleDescription = document.createElement('p');
        articleDescription.setAttribute("class","article-description");
        articleDescription.innerText = res.articles[i].description;
        //Article
        var article = document.createElement('div');
        article.setAttribute("id","article");
        article.append(articleUrlImage,articleauthor,articlePublished,articleUrlTitle,articleDescription)
        $('#articles-container').append(article)
    }   
    console.log(res)
    }).catch((err)=>{
        console.log(err)
    })
}
fifth.onclick = ()=>{
    first.classList.remove("checked")
    second.classList.remove("checked")
    third.classList.remove("checked")
    fourth.classList.remove("checked")
    fifth.classList.add("checked")
    sixth.classList.remove("checked")
    seventh.classList.remove("checked")
    eighth.classList.remove("checked")
    ninth.classList.remove("checked")
    tenth.classList.remove("checked")
    var searchTitle = searchInput.value;
    $.ajax(`https://newsapi.org/v2/everything?q=${searchTitle}&apiKey=98c6dcc256804f67874a7763ab6274c9`).then((res)=>{
    // searchInput.value = "";
    $('#articles-container').text("")
    for (let i = 41; i < 51; i++) {
        //Article Image
        var articleImg = document.createElement('img');
        articleImg.setAttribute("class","article-img");
        articleImg.setAttribute("src",res.articles[i].urlToImage);
        //Article Url for image
        var articleUrlImage = document.createElement('a');
        articleUrlImage.setAttribute("target","_blank");
        articleUrlImage.setAttribute("href",res.articles[i].url);
        articleUrlImage.append(articleImg);
        //Article Author
        var articleauthor = document.createElement('h2');
        articleauthor.setAttribute("class","article-author");
        articleauthor.innerText = res.articles[i].author;
        //Article Published at
        var articlePublished = document.createElement('span');
        articlePublished.setAttribute("class","article-published");
        articlePublished.innerText = res.articles[i].publishedAt;
        //Article Title
        var articleTitle = document.createElement('h3');
        articleTitle.setAttribute("class","article-title");
        articleTitle.innerText = res.articles[i].title;
         //Article Url for title
         var articleUrlTitle = document.createElement('a');
         articleUrlTitle.setAttribute("target","_blank");
         articleUrlTitle.setAttribute("href",res.articles[i].url);
         articleUrlTitle.append(articleTitle);
        //Article Description
        var articleDescription = document.createElement('p');
        articleDescription.setAttribute("class","article-description");
        articleDescription.innerText = res.articles[i].description;
        //Article
        var article = document.createElement('div');
        article.setAttribute("id","article");
        article.append(articleUrlImage,articleauthor,articlePublished,articleUrlTitle,articleDescription)
        $('#articles-container').append(article)
    }   
    console.log(res)
    }).catch((err)=>{
        console.log(err)
    })
}
sixth.onclick = ()=>{
    first.classList.remove("checked")
    second.classList.remove("checked")
    third.classList.remove("checked")
    fourth.classList.remove("checked")
    fifth.classList.remove("checked")
    sixth.classList.add("checked")
    seventh.classList.remove("checked")
    eighth.classList.remove("checked")
    ninth.classList.remove("checked")
    tenth.classList.remove("checked")
    var searchTitle = searchInput.value;
    $.ajax(`https://newsapi.org/v2/everything?q=${searchTitle}&apiKey=98c6dcc256804f67874a7763ab6274c9`).then((res)=>{
    // searchInput.value = "";
    $('#articles-container').text("")
    for (let i = 51; i < 61; i++) {
        //Article Image
        var articleImg = document.createElement('img');
        articleImg.setAttribute("class","article-img");
        articleImg.setAttribute("src",res.articles[i].urlToImage);
        //Article Url for image
        var articleUrlImage = document.createElement('a');
        articleUrlImage.setAttribute("target","_blank");
        articleUrlImage.setAttribute("href",res.articles[i].url);
        articleUrlImage.append(articleImg);
        //Article Author
        var articleauthor = document.createElement('h2');
        articleauthor.setAttribute("class","article-author");
        articleauthor.innerText = res.articles[i].author;
        //Article Published at
        var articlePublished = document.createElement('span');
        articlePublished.setAttribute("class","article-published");
        articlePublished.innerText = res.articles[i].publishedAt;
        //Article Title
        var articleTitle = document.createElement('h3');
        articleTitle.setAttribute("class","article-title");
        articleTitle.innerText = res.articles[i].title;
         //Article Url for title
         var articleUrlTitle = document.createElement('a');
         articleUrlTitle.setAttribute("target","_blank");
         articleUrlTitle.setAttribute("href",res.articles[i].url);
         articleUrlTitle.append(articleTitle);
        //Article Description
        var articleDescription = document.createElement('p');
        articleDescription.setAttribute("class","article-description");
        articleDescription.innerText = res.articles[i].description;
        //Article
        var article = document.createElement('div');
        article.setAttribute("id","article");
        article.append(articleUrlImage,articleauthor,articlePublished,articleUrlTitle,articleDescription)
        $('#articles-container').append(article)
    }   
    console.log(res)
    }).catch((err)=>{
        console.log(err)
    })
}
seventh.onclick = ()=>{
    first.classList.remove("checked")
    second.classList.remove("checked")
    third.classList.remove("checked")
    fourth.classList.remove("checked")
    fifth.classList.remove("checked")
    sixth.classList.remove("checked")
    seventh.classList.add("checked")
    eighth.classList.remove("checked")
    ninth.classList.remove("checked")
    tenth.classList.remove("checked")
    var searchTitle = searchInput.value;
    $.ajax(`https://newsapi.org/v2/everything?q=${searchTitle}&apiKey=98c6dcc256804f67874a7763ab6274c9`).then((res)=>{
    // searchInput.value = "";
    $('#articles-container').text("")
    for (let i = 61; i < 71; i++) {
        //Article Image
        var articleImg = document.createElement('img');
        articleImg.setAttribute("class","article-img");
        articleImg.setAttribute("src",res.articles[i].urlToImage);
        //Article Url for image
        var articleUrlImage = document.createElement('a');
        articleUrlImage.setAttribute("target","_blank");
        articleUrlImage.setAttribute("href",res.articles[i].url);
        articleUrlImage.append(articleImg);
        //Article Author
        var articleauthor = document.createElement('h2');
        articleauthor.setAttribute("class","article-author");
        articleauthor.innerText = res.articles[i].author;
        //Article Published at
        var articlePublished = document.createElement('span');
        articlePublished.setAttribute("class","article-published");
        articlePublished.innerText = res.articles[i].publishedAt;
        //Article Title
        var articleTitle = document.createElement('h3');
        articleTitle.setAttribute("class","article-title");
        articleTitle.innerText = res.articles[i].title;
         //Article Url for title
         var articleUrlTitle = document.createElement('a');
         articleUrlTitle.setAttribute("target","_blank");
         articleUrlTitle.setAttribute("href",res.articles[i].url);
         articleUrlTitle.append(articleTitle);
        //Article Description
        var articleDescription = document.createElement('p');
        articleDescription.setAttribute("class","article-description");
        articleDescription.innerText = res.articles[i].description;
        //Article
        var article = document.createElement('div');
        article.setAttribute("id","article");
        article.append(articleUrlImage,articleauthor,articlePublished,articleUrlTitle,articleDescription)
        $('#articles-container').append(article)
    }   
    console.log(res)
    }).catch((err)=>{
        console.log(err)
    })
}
eighth.onclick = ()=>{
    first.classList.remove("checked")
    second.classList.remove("checked")
    third.classList.remove("checked")
    fourth.classList.remove("checked")
    fifth.classList.remove("checked")
    sixth.classList.remove("checked")
    seventh.classList.remove("checked")
    eighth.classList.add("checked")
    ninth.classList.remove("checked")
    tenth.classList.remove("checked")
    var searchTitle = searchInput.value;
    $.ajax(`https://newsapi.org/v2/everything?q=${searchTitle}&apiKey=98c6dcc256804f67874a7763ab6274c9`).then((res)=>{
    // searchInput.value = "";
    $('#articles-container').text("")
    for (let i = 71; i < 81; i++) {
        //Article Image
        var articleImg = document.createElement('img');
        articleImg.setAttribute("class","article-img");
        articleImg.setAttribute("src",res.articles[i].urlToImage);
        //Article Url for image
        var articleUrlImage = document.createElement('a');
        articleUrlImage.setAttribute("target","_blank");
        articleUrlImage.setAttribute("href",res.articles[i].url);
        articleUrlImage.append(articleImg);
        //Article Author
        var articleauthor = document.createElement('h2');
        articleauthor.setAttribute("class","article-author");
        articleauthor.innerText = res.articles[i].author;
        //Article Published at
        var articlePublished = document.createElement('span');
        articlePublished.setAttribute("class","article-published");
        articlePublished.innerText = res.articles[i].publishedAt;
        //Article Title
        var articleTitle = document.createElement('h3');
        articleTitle.setAttribute("class","article-title");
        articleTitle.innerText = res.articles[i].title;
         //Article Url for title
         var articleUrlTitle = document.createElement('a');
         articleUrlTitle.setAttribute("target","_blank");
         articleUrlTitle.setAttribute("href",res.articles[i].url);
         articleUrlTitle.append(articleTitle);
        //Article Description
        var articleDescription = document.createElement('p');
        articleDescription.setAttribute("class","article-description");
        articleDescription.innerText = res.articles[i].description;
        //Article
        var article = document.createElement('div');
        article.setAttribute("id","article");
        article.append(articleUrlImage,articleauthor,articlePublished,articleUrlTitle,articleDescription)
        $('#articles-container').append(article)
    }   
    console.log(res)
    }).catch((err)=>{
        console.log(err)
    })
}
ninth.onclick = ()=>{
    first.classList.remove("checked")
    second.classList.remove("checked")
    third.classList.remove("checked")
    fourth.classList.remove("checked")
    fifth.classList.remove("checked")
    sixth.classList.remove("checked")
    seventh.classList.remove("checked")
    eighth.classList.remove("checked")
    ninth.classList.add("checked")
    tenth.classList.remove("checked")
    var searchTitle = searchInput.value;
    $.ajax(`https://newsapi.org/v2/everything?q=${searchTitle}&apiKey=98c6dcc256804f67874a7763ab6274c9`).then((res)=>{
    // searchInput.value = "";
    $('#articles-container').text("")
    for (let i = 81; i < 91; i++) {
        //Article Image
        var articleImg = document.createElement('img');
        articleImg.setAttribute("class","article-img");
        articleImg.setAttribute("src",res.articles[i].urlToImage);
        //Article Url for image
        var articleUrlImage = document.createElement('a');
        articleUrlImage.setAttribute("target","_blank");
        articleUrlImage.setAttribute("href",res.articles[i].url);
        articleUrlImage.append(articleImg);
        //Article Author
        var articleauthor = document.createElement('h2');
        articleauthor.setAttribute("class","article-author");
        articleauthor.innerText = res.articles[i].author;
        //Article Published at
        var articlePublished = document.createElement('span');
        articlePublished.setAttribute("class","article-published");
        articlePublished.innerText = res.articles[i].publishedAt;
        //Article Title
        var articleTitle = document.createElement('h3');
        articleTitle.setAttribute("class","article-title");
        articleTitle.innerText = res.articles[i].title;
         //Article Url for title
         var articleUrlTitle = document.createElement('a');
         articleUrlTitle.setAttribute("target","_blank");
         articleUrlTitle.setAttribute("href",res.articles[i].url);
         articleUrlTitle.append(articleTitle);
        //Article Description
        var articleDescription = document.createElement('p');
        articleDescription.setAttribute("class","article-description");
        articleDescription.innerText = res.articles[i].description;
        //Article
        var article = document.createElement('div');
        article.setAttribute("id","article");
        article.append(articleUrlImage,articleauthor,articlePublished,articleUrlTitle,articleDescription)
        $('#articles-container').append(article)
    }   
    console.log(res)
    }).catch((err)=>{
        console.log(err)
    })
}
tenth.onclick = ()=>{
    first.classList.remove("checked")
    second.classList.remove("checked")
    third.classList.remove("checked")
    fourth.classList.remove("checked")
    fifth.classList.remove("checked")
    sixth.classList.remove("checked")
    seventh.classList.remove("checked")
    eighth.classList.remove("checked")
    ninth.classList.remove("checked")
    tenth.classList.add("checked")
    var searchTitle = searchInput.value;
    $.ajax(`https://newsapi.org/v2/everything?q=${searchTitle}&apiKey=98c6dcc256804f67874a7763ab6274c9`).then((res)=>{
    // searchInput.value = "";
    $('#articles-container').text("")
    for (let i = 91; i < res.articles.length; i++) {
        //Article Image
        var articleImg = document.createElement('img');
        articleImg.setAttribute("class","article-img");
        articleImg.setAttribute("src",res.articles[i].urlToImage);
        //Article Url for image
        var articleUrlImage = document.createElement('a');
        articleUrlImage.setAttribute("target","_blank");
        articleUrlImage.setAttribute("href",res.articles[i].url);
        articleUrlImage.append(articleImg);
        //Article Author
        var articleauthor = document.createElement('h2');
        articleauthor.setAttribute("class","article-author");
        articleauthor.innerText = res.articles[i].author;
        //Article Published at
        var articlePublished = document.createElement('span');
        articlePublished.setAttribute("class","article-published");
        articlePublished.innerText = res.articles[i].publishedAt;
        //Article Title
        var articleTitle = document.createElement('h3');
        articleTitle.setAttribute("class","article-title");
        articleTitle.innerText = res.articles[i].title;
         //Article Url for title
         var articleUrlTitle = document.createElement('a');
         articleUrlTitle.setAttribute("target","_blank");
         articleUrlTitle.setAttribute("href",res.articles[i].url);
         articleUrlTitle.append(articleTitle);
        //Article Description
        var articleDescription = document.createElement('p');
        articleDescription.setAttribute("class","article-description");
        articleDescription.innerText = res.articles[i].description;
        //Article
        var article = document.createElement('div');
        article.setAttribute("id","article");
        article.append(articleUrlImage,articleauthor,articlePublished,articleUrlTitle,articleDescription)
        $('#articles-container').append(article)
    }   
    console.log(res)
    }).catch((err)=>{
        console.log(err)
    })
}
window.onkeydown = (e)=>{
    if(e.which == '13'){
        main.style.display = 'block'
        footer.style.display = 'block'
        first.classList.add("checked")
        second.classList.remove("checked")
        third.classList.remove("checked")
        fourth.classList.remove("checked")
        fifth.classList.remove("checked")
        sixth.classList.remove("checked")
        seventh.classList.remove("checked")
        eighth.classList.remove("checked")
        ninth.classList.remove("checked")
        tenth.classList.remove("checked")
        var searchTitle = searchInput.value;
        $.ajax(`https://newsapi.org/v2/everything?q=${searchTitle}&apiKey=98c6dcc256804f67874a7763ab6274c9`).then((res)=>{
        // searchInput.value = "";
        $('#articles-container').text("")
        for (let i = 0; i < 11; i++) {
            //Article Image
            var articleImg = document.createElement('img');
            articleImg.setAttribute("class","article-img");
            articleImg.setAttribute("src",res.articles[i].urlToImage);
            //Article Url for image
            var articleUrlImage = document.createElement('a');
            articleUrlImage.setAttribute("target","_blank");
            articleUrlImage.setAttribute("href",res.articles[i].url);
            articleUrlImage.append(articleImg);
            //Article Author
            var articleauthor = document.createElement('h2');
            articleauthor.setAttribute("class","article-author");
            articleauthor.innerText = res.articles[i].author;
            //Article Published at
            var articlePublished = document.createElement('span');
            articlePublished.setAttribute("class","article-published");
            articlePublished.innerText = res.articles[i].publishedAt;
            //Article Title
            var articleTitle = document.createElement('h3');
            articleTitle.setAttribute("class","article-title");
            articleTitle.innerText = res.articles[i].title;
             //Article Url for title
             var articleUrlTitle = document.createElement('a');
             articleUrlTitle.setAttribute("target","_blank");
             articleUrlTitle.setAttribute("href",res.articles[i].url);
             articleUrlTitle.append(articleTitle);
            //Article Description
            var articleDescription = document.createElement('p');
            articleDescription.setAttribute("class","article-description");
            articleDescription.innerText = res.articles[i].description;
            //Article
            var article = document.createElement('div');
            article.setAttribute("id","article");
            article.append(articleUrlImage,articleauthor,articlePublished,articleUrlTitle,articleDescription)
            $('#articles-container').append(article)
        }   
        console.log(res)
        }).catch((err)=>{
            console.log(err)
        })
    }
}