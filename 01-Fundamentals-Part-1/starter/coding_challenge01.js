const calculateBMI = object => object.name + ":  " + object.weight / object.height ** 2

document.getElementById("submit").onclick = () => {
    const userHeight =
        parseFloat(document.getElementById("height").value)

    const userWeight =
        parseFloat(
            document.getElementById("weight").value
        )
    const username = document.getElementById("name").value
    document.getElementById("result").innerHTML = userHeight>0&&userWeight>0 ?calculateBMI({name: username , weight: userWeight, height: userHeight}):"<h2 style='color: red'>Please input your values</h2>"
}

