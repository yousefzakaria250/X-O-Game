
let title = document.querySelector('.title') ;

let turn ='x';

let squares = [] ;

function end(n1 , n2 , n3)
{
    title.innerHTML = `${squares[n1]} Is Winnner`  ;
    
    document.getElementById('item' + n1).style.background ="#000" ;
    document.getElementById('item' + n2).style.background ="#000" ;
    document.getElementById('item' + n3).style.background ="#000" ;
    runAudio() ;
    setInterval( function(){ title.innerHTML +='.'} ,1000);
    setTimeout(function(){location.reload()} ,5000) ;


}
function runAudio(ev)
{
   document.getElementById('aid').play() ;
}
function stopAudio()
{
    document.getElementById('aid').pause() ;
}
function winner()
{
    for(let i = 1 ; i < 10 ; i++)
    {
       squares[i] = document.getElementById('item' + i ).innerHTML ;

    }

    if( squares[1] == squares[2] && squares[2] == squares[3] && squares[1] !=' ')
    {
        end(1 , 2 , 3) ;

    }
    else if( squares[4] == squares[5] && squares[5] == squares[6] && squares[5] !=' ')
    {
        end(4 , 5 , 6) ;

    }
    else if( squares[7] == squares[8] && squares[8] == squares[9] && squares[8] !=' ')
    {
        end(7 , 8 , 9) ;

    }
    else if( squares[1] == squares[4] && squares[4] == squares[7] && squares[1] !=' ')
    {
        end(1 , 4 , 7) ;

    }
    else if( squares[2] == squares[5] && squares[5] == squares[8] && squares[2] !=' ')
    {
        end( 2 , 5 ,  8) ;

    }
    else if( squares[3] == squares[6] && squares[6] == squares[9] && squares[3] !=' ')
    {
        end(3 , 6 , 9) ;

    }

    else if( squares[1] == squares[5] && squares[5] == squares[9] && squares[1] !=' ')
    {
        end(1 , 5 , 9) ;

    }
    else if( squares[3] == squares[5] && squares[5] == squares[7] && squares[3] !=' ')
    {
        end(3 , 5 , 7) ;

    }
}
function startGame(id)
{
    let ele = document.getElementById(id) ;
    if( turn =='x' && ele.innerHTML == ' ')
    {
        ele.innerHTML ='X' ;
        turn='o' ;
        title.innerHTML='O'
    }

    else if( turn == 'o' && ele.innerHTML ==' ')
    {
        ele.innerHTML ='O' ;
        turn ='x' ;
        title.innerHTML ='X' ;
    }

    winner() ;
 
}