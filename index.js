hexo.extend.filter.register('before_post_render', function (data) {
    var regExp = RegExp("!\\[(.*)\\]\\((.*)\\)", "g");
    data.content = data.content.replace(regExp, function (substring, name, url) {
        if (url.indexOf("://") === -1) {
            var index = url.indexOf("/");
            if (index !== -1) {
                url = url.substr(index + 1);
            }
        }
        var result = "{% asset_img " + url + " " + name + " %}";
        console.info("replace " + substring + " -> " + result)
        return result;
    });

    data.content = data.content.replace("[TOC]", "<!-- toc -->");
    return data;
}, 9);
