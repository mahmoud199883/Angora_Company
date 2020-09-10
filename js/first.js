

let colors =$(".col1");
colors.eq(0).css("backgroundColor","red");
colors.eq(1).css("backgroundColor","yellow")
colors.eq(2).css("backgroundColor","green")
colors.eq(3).css("backgroundColor","blue")


colors.click(function()
{
   let choosedcolor = $(this).css("backgroundColor");
   $("body").css("color",choosedcolor)
})


$(".setting i").click(function()
{
    let distance =$(".mycolors").innerWidth();
    // $(".mycolors").toggle(1000);
    if($(".setting").css("left")=="0px")
    {
        $(".setting").animate({left:`-${distance}`},1000)
    }
    else
    {
        $(".setting").animate({left:"0px"},1000)

    }
})


$(".img-item").click(function()
{
    let src =$(this).attr("src");
    $(".mainimg").attr("src",src);
})