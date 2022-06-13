let slide = document.querySelectorAll(".slides")

slide.forEach(

    function (y) {


        y.addEventListener("click", function () {


            deleteClass()

            y.classList.add("active")


        })

    }



)




function deleteClass () {

    slide.forEach(

        function (y) {


            y.classList.remove("active")

        }


    )




}
