hexo.extend.filter.register('before_post_render', function (data) {
    console.info("\n--------------------------- " + data.title + " ---------------------------\nsource: " + data.source);
    var regExp = RegExp("!\\[(.*)\\]\\((.*)\\)", "g");
    data.content = data.content.replace(regExp, function (substring, name, url) {
        if (url.indexOf("://") === -1) {
            var index = url.indexOf("/");
            if (index !== -1) {
                url = url.substr(index + 1);
            }
        }
        var result = "{% asset_img " + url + " " + name + " %}";
        console.info("replace " + substring + " -> " + result);
        return result;
    });

    data.content = data.content.replace("[TOC]", function (substring) {
        console.info("replace " + substring + " -> " + "<!-- toc -->");
        return "<!-- toc -->";
    });
    console.info("\n");
    return data;
}, 9);
