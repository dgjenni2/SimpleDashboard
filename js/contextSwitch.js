$(document).ready(function () {
	$(".contextSwitcher").click(function () {
		console.log("Hello World!")
		let id = $(this).attr("id")
		$(".contextSwitcher").removeClass("active")
		$(".daily").addClass("hidden")
		$(".weekly").addClass("hidden")
		$(".monthly").addClass("hidden")
		$(this).addClass("active")

		$("." + id).removeClass("hidden")
	})
})
