const url = "/fbpositions";

const bodyTr = document.querySelector("tbody")

const width = window.innerWidth;

const renderData = async()=>{
    try {
        const response = await fetch(url);
        const jsonResponse = await response.json();
        const data = jsonResponse.data;

        data.forEach(element => {

            var className;

            if(element.position <= 4){
                
                className = "winner"
            }if(element.position >= 23){

                className = "loser";
            }

                bodyTr.innerHTML += `<tr class=${className}>
                                        <td class="bodyPos">${element.position}</td>
                                        <td class="bodyTeam"><img src=${element.teamImg} alt=${element.team}>${element.team}</td>
                                        <td class="bodyPJ">${element.gamesPlayed}</td>
                                        <td class="bodyG">${element.wins}</td>
                                        <td class="bodyE">${element.ties}</td>
                                        <td class="bodyP">${element.loses}</td>
                                        <td class="bodyGF">${element.gf}</td>
                                        <td class="bodyGC">${element.gc}</td>
                                        <td class="bodyDG">${element.dg}</td>
                                        <td class="bodyPts">${element.score}</td>
                                    </tr>`
           
    })
    } catch (error) {
        console.log(error)
    }
}

renderData();
