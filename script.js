let picture = [];

$(".add").click(function() {
    let addedpic = $(".picture-url").val();
    let captions = $(".caption").val();
    picture.push(addedpic);
    picture.push(captions);
    $(".images").append("<img src=" + addedpic + ">" + "<br>" + "<figcaption>" + captions + "<figcaption>");
    $(".picture-url").val("");
    $(".caption").val("");
});