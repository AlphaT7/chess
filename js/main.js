/* global $ */

let main = {

  variables: {
    selectedpiece: '',
    highlighted: [],
    pieces: {
      w_king: {
        position: '5-1',
        img: '&#9812;',
        captured: false,
        type: 'king'
      },
      w_queen: {
        position: '4-1',
        img: '&#9813;',
        captured: false,
        type: 'queen'
      },
      w_bishop1: {
        position: '3-1',
        img: '&#9815;',
        captured: false,
        type: 'bishop'
      },
      w_bishop2: {
        position: '6-1',
        img: '&#9815;',
        captured: false,
        type: 'bishop'
      },
      w_knight1: {
        position: '2-1',
        img: '&#9816;',
        captured: false,
        type: 'knight'
      },
      w_knight2: {
        position: '7-1',
        img: '&#9816;',
        captured: false,
        type: 'knight'
      },
      w_rook1: {
        position: '1-1',
        img: '&#9814;',
        captured: false,
        type: 'rook'
      },
      w_rook2: {
        position: '8-1',
        img: '&#9814;',
        captured: false,
        type: 'rook'
      },
      w_pawn1: {
        position: '1-2',
        img: '&#9817;',
        captured: false,
        type: 'pawn',
        moved: false
      },
      w_pawn2: {
        position: '2-2',
        img: '&#9817;',
        captured: false,
        type: 'pawn',
        moved: false
      },
      w_pawn3: {
        position: '3-2',
        img: '&#9817;',
        captured: false,
        type: 'pawn',
        moved: false
      },
      w_pawn4: {
        position: '4-2',
        img: '&#9817;',
        captured: false,
        type: 'pawn',
        moved: false
      },
      w_pawn5: {
        position: '5-2',
        img: '&#9817;',
        captured: false,
        type: 'pawn',
        moved: false
      },
      w_pawn6: {
        position: '6-2',
        img: '&#9817;',
        captured: false,
        type: 'pawn',
        moved: false
      },
      w_pawn7: {
        position: '7-2',
        img: '&#9817;',
        captured: false,
        type: 'pawn',
        moved: false
      },
      w_pawn8: {
        position: '8-2',
        img: '&#9817;',
        captured: false,
        type: 'pawn',
        moved: false
      },

      b_king: {
        //position: '5-8',
        position: '2-3',
        img: '&#9818;',
        captured: false,
        type: 'king'
      },
      b_queen: {
        position: '4-8',
        img: '&#9819;',
        captured: false,
        type: 'queen'
      },
      b_bishop1: {
        position: '3-8',
        img: '&#9821;',
        captured: false,
        type: 'bishop'
      },
      b_bishop2: {
        position: '6-8',
        img: '&#9821;',
        captured: false,
        type: 'bishop'
      },
      b_knight1: {
        position: '2-8',
        img: '&#9822;',
        captured: false,
        type: 'knight'
      },
      b_knight2: {
        position: '7-8',
        img: '&#9822;',
        captured: false,
        type: 'knight'
      },
      b_rook1: {
        position: '1-8',
        img: '&#9820;',
        captured: false,
        type: 'rook'
      },
      b_rook2: {
        position: '8-8',
        img: '&#9820;',
        captured: false,
        type: 'rook'
      },
      b_pawn1: {
        position: '1-7',
        img: '&#9823;',
        captured: false,
        type: 'pawn',
        moved: false
      },
      b_pawn2: {
        position: '2-7',
        img: '&#9823;',
        captured: false,
        type: 'pawn',
        moved: false
      },
      b_pawn3: {
        position: '3-7',
        img: '&#9823;',
        captured: false,
        type: 'pawn',
        moved: false
      },
      b_pawn4: {
        position: '4-7',
        img: '&#9823;',
        captured: false,
        type: 'pawn',
        moved: false
      },
      b_pawn5: {
        position: '5-7',
        img: '&#9823;',
        captured: false,
        type: 'pawn',
        moved: false
      },
      b_pawn6: {
        position: '6-7',
        img: '&#9823;',
        captured: false,
        type: 'pawn',
        moved: false
      },
      b_pawn7: {
        position: '7-7',
        img: '&#9823;',
        captured: false,
        type: 'pawn',
        moved: false
      },
      b_pawn8: {
        position: '8-7',
        img: '&#9823;',
        captured: false,
        type: 'pawn',
        moved: false
      }

    }
  },

  methods: {
    gamesetup: function() {
      $('.gamecell').attr('chess', 'null');
      for (let gamepiece in main.variables.pieces) {
        $('#' + main.variables.pieces[gamepiece].position).html(main.variables.pieces[gamepiece].img);
        $('#' + main.variables.pieces[gamepiece].position).attr('chess', gamepiece);
      }
    },
    moveoptions: function(selectedpiece, highlight) {

      let position = { x: '', y: '' };
      position.x = main.variables.pieces[selectedpiece].position.split('-')[0];
      position.y = main.variables.pieces[selectedpiece].position.split('-')[1]

      switch (main.variables.pieces[selectedpiece].type) {
        case 'king':

          break;
        case 'queen':

          break;
        case 'bishop':

          break;
        case 'knight':

          break;
        case 'rook':

          break;
        case 'pawn':

          let options = [];
          let coordinates = [];
          let startpoint = main.variables.pieces[selectedpiece].position;

          if (main.variables.highlighted.length != 0) {
            main.methods.normal_options(main.variables.highlighted);
          }

          // calculate pawn options
          if (main.variables.pieces[selectedpiece].moved == false) {
            if (selectedpiece.slice(0, 1) == 'w') {
              coordinates.push(main.methods.getposition(position, { x: 0, y: 1 }));
              coordinates.push(main.methods.getposition(position, { x: 0, y: 2 }));
              coordinates.push(main.methods.getposition(position, { x: 1, y: 1 }));
              coordinates.push(main.methods.getposition(position, { x: -1, y: 1 }));
            }
            else if (selectedpiece.slice(0, 1) == 'b') {

            }
          }
          else if (main.variables.pieces[selectedpiece].moved == true) {

          }

          options = (main.methods.checkoptions(startpoint, coordinates, 'pawn')).slice(0);
          main.variables.highlighted = options.slice(0);
          main.methods.highlight_options(options);

          //main.methods.normal_pawnoptions(position,selectedpiece);

          break;
        default:

          break;
      }
    },

    getposition: function(position, increment) {
      let x = parseFloat(position.x) + parseFloat(increment.x);
      let y = parseFloat(position.y) + parseFloat(increment.y);
      return x + '-' + y;
    },

    checkoptions: function(startpoint, coordinates, piecetype) { // first check if any of the possible coordinates is out of bounds;
        
      coordinates = coordinates.filter(val => {
        let pos = { x: 0, y: 0 };
        pos.x = val.slice(0, 1);
        pos.y = val.slice(1, 2);

        if (!(pos.x < 1) && !(pos.x > 8) && !(pos.y < 1) && !(pos.y > 8)) { // if it is not out of bounds, return the coordinate;
          return val;
        }
      });

      switch (piecetype) {
        case 'pawn':

            let attackoptions = coordinates.filter(val => {
              let sp = { x: 0, y: 0 };
              let coordinate = val.split('-');

              sp.x = startpoint.split('-')[0];
              sp.y = startpoint.split('-')[1];
              
              if (coordinate[0] < sp.x || coordinate[0] > sp.x){ // if the coordinate is on either side of the center, check if it has an opponent piece on it;
                return ($('#' + val).attr('chess') != 'null' && ($('#' + val).attr('chess')).slice(0,1) == 'b'); // return coordinates with opponent pieces on them
              } else {
                return val; // otherwise return the coordinate;
              }
                          
            });
          
          console.log(attackoptions);
          
          return attackoptions;

          break;
      }

      return coordinates;
    },

    highlight_options: function(options) {
      options.forEach(function(element, index, array) {
        $('#' + element).toggleClass("green shake-little");
      });
    },

    normal_options: function(positions) {
      positions.forEach(function(element, index, array) {
        $('#' + element).toggleClass("green shake-little");
      });
    }

  }
};

$(document).ready(function() {
  main.methods.gamesetup();
  /*  
    $('.gamecell').mouseover(function(){
      if ($(this).attr('chess') != 'null'){
        main.methods.moveoptions($(this).attr('chess'));
      }
    });
    
    $('.gamecell').mouseout(function(){
      if ($(this).attr('chess') != 'null'){
        main.methods.moveoptions($(this).attr('chess'),false);
      }
    });
  */
  $('.gamecell').click(function(event) {
    main.variables.selectedpiece = event.target.id;
    main.methods.moveoptions($(this).attr('chess'), true);
  });

  $('body').contextmenu(function(e) {
    e.preventDefault();
  });

});
