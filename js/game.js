document.addEventListener('DOMContentLoaded', ()=>
{
    /* array where all the images of grid are stored */
    const cardArray =
    [
        {
            name : "cheeseburger",
            img : "../img/cheeseburger.png"
        },
        {
            name : "fries",
            img : "../img/fries.png"
        },
        {
            name : "hotdog",
            img : "../img/hotdog.png"
        },
        {
            name : "ice-cream",
            img : "../img/ice-cream.png"
        },
        {
            name : "milkshake",
            img : "../img/milkshake.png"
        },
        {
            name : "pizza",
            img : "../img/pizza.png"
        },
        {
            name : "cheeseburger",
            img : "../img/cheeseburger.png"
        },
        {
            name : "fries",
            img : "../img/fries.png"
        },
        {
            name : "hotdog",
            img : "../img/hotdog.png"
        },
        {
            name : "ice-cream",
            img : "../img/ice-cream.png"
        },
        {
            name : "milkshake",
            img : "../img/milkshake.png"
        },
        {
            name : "pizza",
            img : "../img/pizza.png"
        }
    ];

    cardArray.sort(()=> 0.5 - Math.random());

    var cardChosen = [];
    var cardChosenID = [];
    var cardWon = [];

    /* storing the div element with class name grid */
    const grid = document.querySelector('.grid');
    const result = document.querySelector('#result');

    /* create the borad */
    function createBoard()
    {
        for(let i=0;i<cardArray.length;++i)
        {
            var card = document.createElement('img'); /* creates an element and returns */
            card.setAttribute('src', '../img/blank.png'); /* setting attribute src's value */
            card.setAttribute('data-id', i);
            card.addEventListener("click", flipCard); /* adding event to an element */
            grid.appendChild(card); /* adding child element of an element */
        }
    }

    /* check for mathces */
    function checkForMatch()
    {
        var cards = document.querySelectorAll('img'); /* gets all the img element of the document  */
        const oneID = cardChosenID[0];
        const twoID = cardChosenID[1];

        if(cardChosen[0]===cardChosen[1])
        {
            //alert('You have found a match');
            cards[oneID].setAttribute('src', '../img/white.png');
            cards[twoID].setAttribute('src', '../img/white.png');
            cardWon.push(cardChosen);
        }
        else
        {
            cards[oneID].setAttribute('src', '../img/blank.png');
            cards[twoID].setAttribute('src', '../img/blank.png');
            //alert('Try again');
        }
        cardChosen = [];
        cardChosenID = [];
        result.textContent = cardWon.length*10;

        if(cardWon.length===cardArray.length/2)
        {
            alert('You have won!')
        }
    }


    /* flip card */
    function flipCard()
    {
        var cardID = this.getAttribute('data-id');
        cardChosen.push(cardArray[cardID].name);
        cardChosenID.push(cardID);
        this.setAttribute('src', cardArray[cardID].img);
        if(cardChosen.length==2)
        {
            setTimeout(checkForMatch,500);
        }
    }


    createBoard();
});
