/**
 * Created by CJuser on 2016-10-31.
 */
var priceTd = null;
var titleTd = null;
var authorTd = null;
var img = null;
var imgTd = null;
var tr = null;
var id = null;
function searchBook() {
    if (event.keyCode == 13) {
        $.ajax({
            url: "http://localhost:7070/book/bookList",
            type: "GET",
            dataType: "jsonp",
            jsonp: "callback",
            data: {
                keyword: $("#keyword").val()
            },
            success: function (result) {
                $("#list-description").text("책 표지를 클릭하면 상세정보를 알 수 있습니다.");

                //결과창출력
                $("tbody").empty();
                for (var i = 0; i < result.length; i++) {
                    tr = $("<tr></tr>").attr("data-isbn", result[i].isbn);





                    priceTd = $("<td></td>").text(result[i].price);
                    // var detailBtn = $("<input />").attr("type","image").attr("src","detail1.png").attr("width", "15px").attr("height", "15px");
                    var detailDiv = $("<div></div>").attr("id", result[i].isbn).attr("class", "detailDiv");
                    var titleSpan = $("<span></span>").attr("id", "title" + result[i].isbn).text(result[i].title);
                    titleTd = $("<td></td>").append(titleSpan).append(detailDiv);
                    authorTd = $("<td></td>").text(result[i].author);

                    // titleTd
                    // detailDiv.hide();

                    var isbn = $(this).parent().parent().attr("data-isbn");
                    img = $("<input />").attr("type", "image").attr("src", result[i].img);
                    imgTd = $("<td></td>").append(img);
                    // var isbn = tr.attr("data-isbn");
                    img.on("click", function () {
                        var isbn = $(this).parent().parent().attr("data-isbn");
                        //detail 처리
                        $.ajax({
                            url: "http://localhost:7070/book/bookDetail",
                            type: "GET",
                            dataType: "jsonp",
                            jsonp: "callback",
                            data: {
                                isbn: isbn
                            },
                            success: function (result) {
                                // detailBtn.parent().find("#"+isbn).append("123");
                                $("#" + isbn).append("출판일 : " + result.date + "<br>페이지 : " + result.page + "쪽<br>출판사 : " + result.publisher);

                            },
                            error: function () {
                                alert("상세정보 에러 발생!!")
                            }
                        });
                    });


                    tr.append(imgTd);
                    tr.append(titleTd);
                    tr.append(authorTd);
                    tr.append(priceTd);

                    $("tbody").append(tr);
                }

            },
            error: function () {
                alert("이상이상")
            }
        });
    }

}

function test(key) {
    $.ajax({
        url: "http://localhost:7070/book/bookList",
        type: "GET",
        dataType: "jsonp",
        jsonp: "callback",
        data: {
            keyword: key//$("#keyword").val()
        },
        success: function (result) {
            $("#list-description").text("책 표지를 클릭하면 상세정보를 알 수 있습니다.");

            //결과창출력
            $("tbody").empty();
            for (var i = 0; i < result.length; i++) {
                tr = $("<tr></tr>").attr("data-isbn", result[i].isbn);





                priceTd = $("<td></td>").text(result[i].price);
                // var detailBtn = $("<input />").attr("type","image").attr("src","detail1.png").attr("width", "15px").attr("height", "15px");
                var detailDiv = $("<div></div>").attr("id", result[i].isbn).attr("class", "detailDiv");
                var titleSpan = $("<span></span>").attr("id", "title" + result[i].isbn).text(result[i].title);
                titleTd = $("<td></td>").append(titleSpan).append(detailDiv);
                authorTd = $("<td></td>").text(result[i].author);

                // titleTd
                // detailDiv.hide();

                var isbn = $(this).parent().parent().attr("data-isbn");
                img = $("<input />").attr("type", "image").attr("src", result[i].img);
                imgTd = $("<td></td>").append(img);
                // var isbn = tr.attr("data-isbn");
                img.on("click", function () {
                    var isbn = $(this).parent().parent().attr("data-isbn");
                    //detail 처리
                    $.ajax({
                        url: "http://localhost:7070/book/bookDetail",
                        type: "GET",
                        dataType: "jsonp",
                        jsonp: "callback",
                        data: {
                            isbn: isbn
                        },
                        success: function (result) {
                            // detailBtn.parent().find("#"+isbn).append("123");
                            $("#" + isbn).append("출판일 : " + result.date + "<br>페이지 : " + result.page + "쪽<br>출판사 : " + result.publisher);

                        },
                        error: function () {
                            alert("상세정보 에러 발생!!")
                        }
                    });
                });


                tr.append(imgTd);
                tr.append(titleTd);
                tr.append(authorTd);
                tr.append(priceTd);

                $("tbody").append(tr);
            }

        },
        error: function () {
            alert("이상이상")
        }
    });
}