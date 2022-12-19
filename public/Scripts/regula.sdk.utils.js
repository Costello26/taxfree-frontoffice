/*=====Utilities=====*/

function getFromEnum(set, value) {
    for (var k in set) {
        if (set.hasOwnProperty(k)) {
            if (set[k] == value) {
                return k;
            }
        }
    }
    return undefined;
}

function GetTranslation(value) {
    var cookieLang = $.cookie('language');

    var entry = Strings[value];
    if (entry) {
        var result = entry[cookieLang];
        if (result != null)
            return result;
    }

    return value;
}

function setLang(language) {
    $("#lang").val(language);
    $.cookie('language', language);
    $("[data-translate]").each(function () {
        if ('value' in this) {
            $(this).val(function () {
                var key = $(this).data("translate");
                return GetTranslation(key);
            });
        } else {
            $(this).text(function () {
                var key = $(this).data("translate");
                return GetTranslation(key);
            });
        }
        ;
    });
}

function trimChar(string, charToRemove) {
    while (string.charAt(0) == charToRemove) {
        string = string.substring(1);
    }

    while (string.charAt(string.length - 1) == charToRemove) {
        string = string.substring(0, string.length - 1);
    }

    return string;
}
