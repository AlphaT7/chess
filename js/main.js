/* global $ */

let main = {

  variables: {
    selectedpiece: '',
    highlighted: [],
    pieces: {
      w_king: {
        //position: '5_1',
        position: '4_6',
        img: '&#9812;',
        captured: false,
        type: 'w_king'
      },
      w_queen: {
        //position: '4_1',
        position: '5_5',
        img: '&#9813;',
        captured: false,
        type: 'w_queen'
      },
      w_bishop1: {
        position: '3_1',
        img: '&#9815;',
        captured: false,
        type: 'w_bishop'
      },
      w_bishop2: {
        position: '6_1',
        img: '&#9815;',
        captured: false,
        type: 'w_bishop'
      },
      w_knight1: {
        position: '2_1',
        img: '&#9816;',
        captured: false,
        type: 'w_knight'
      },
      w_knight2: {
        //position: '7_1',
        position: '4_4',
        img: '&#9816;',
        captured: false,
        type: 'w_knight'
      },
      w_rook1: {
        position: '1_1',
        img: '&#9814;',
        captured: false,
        type: 'w_rook'
      },
      w_rook2: {
        position: '8_1',
        img: '&#9814;',
        captured: false,
        type: 'w_rook'
      },
      w_pawn1: {
        position: '1_2',
        img: '&#9817;',
        captured: false,
        type: 'w_pawn',
        moved: false
      },
      w_pawn2: {
        position: '2_2',
        img: '&#9817;',
        captured: false,
        type: 'w_pawn',
        moved: false
      },
      w_pawn3: {
        position: '3_2',
        img: '&#9817;',
        captured: false,
        type: 'w_pawn',
        moved: false
      },
      w_pawn4: {
        position: '4_2',
        img: '&#9817;',
        captured: false,
        type: 'w_pawn',
        moved: false
      },
      w_pawn5: {
        position: '5_2',
        img: '&#9817;',
        captured: false,
        type: 'w_pawn',
        moved: false
      },
      w_pawn6: {
        position: '6_2',
        img: '&#9817;',
        captured: false,
        type: 'w_pawn',
        moved: false
      },
      w_pawn7: {
        position: '7_2',
        img: '&#9817;',
        captured: false,
        type: 'w_pawn',
        moved: false
      },
      w_pawn8: {
        position: '8_2',
        img: '&#9817;',
        captured: false,
        type: 'w_pawn',
        moved: false
      },

      b_king: {
        //position: '5_8',
        position: '2_3',
        img: '&#9818;',
        captured: false,
        type: 'b_king'
      },
      b_queen: {
        //position: '4_8',
        position: '3_3',
        img: '&#9819;',
        captured: false,
        type: 'b_queen'
      },
      b_bishop1: {
        position: '3_8',
        img: '&#9821;',
        captured: false,
        type: 'b_bishop'
      },
      b_bishop2: {
        position: '6_8',
        img: '&#9821;',
        captured: false,
        type: 'b_bishop'
      },
      b_knight1: {
        position: '2_8',
        img: '&#9822;',
        captured: false,
        type: 'b_knight'
      },
      b_knight2: {
        position: '7_8',
        img: '&#9822;',
        captured: false,
        type: 'b_knight'
      },
      b_rook1: {
        position: '1_8',
        img: '&#9820;',
        captured: false,
        type: 'b_rook'
      },
      b_rook2: {
        position: '8_8',
        img: '&#9820;',
        captured: false,
        type: 'b_rook'
      },
      b_pawn1: {
        position: '1_7',
        img: '&#9823;',
        captured: false,
        type: 'b_pawn',
        moved: false
      },
      b_pawn2: {
        position: '2_7',
        img: '&#9823;',
        captured: false,
        type: 'b_pawn',
        moved: false
      },
      b_pawn3: {
        position: '3_7',
        img: '&#9823;',
        captured: false,
        type: 'b_pawn',
        moved: false
      },
      b_pawn4: {
        position: '4_7',
        img: '&#9823;',
        captured: false,
        type: 'b_pawn',
        moved: false
      },
      b_pawn5: {
        position: '5_7',
        img: '&#9823;',
        captured: false,
        type: 'b_pawn',
        moved: false
      },
      b_pawn6: {
        position: '6_7',
        img: '&#9823;',
        captured: false,
        type: 'b_pawn',
        moved: false
      },
      b_pawn7: {
        position: '7_7',
        img: '&#9823;',
        captured: false,
        type: 'b_pawn',
        moved: false
      },
      b_pawn8: {
        position: '8_7',
        img: '&#9823;',
        captured: false,
        type: 'b_pawn',
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
      position.x = main.variables.pieces[selectedpiece].position.split('_')[0];
      position.y = main.variables.pieces[selectedpiece].position.split('_')[1]

      // these 3 options need to be var instead of let
      var options = []; 
      var coordinates = [];
      var startpoint = main.variables.pieces[selectedpiece].position;

      if (main.variables.highlighted.length != 0) {
        main.methods.normal_options(main.variables.highlighted);
      }

      switch (main.variables.pieces[selectedpiece].type) {
        case 'king':

          break;
        case 'queen':

          break;
        case 'bishop':

          break;
        case 'w_knight':

          coordinates.push(main.methods.getposition(position, { x: -1, y: 2 }));
          coordinates.push(main.methods.getposition(position, { x: 1, y: 2 }));
          coordinates.push(main.methods.getposition(position, { x: 1, y: -2 }));
          coordinates.push(main.methods.getposition(position, { x: -1, y: -2 }));
          coordinates.push(main.methods.getposition(position, { x: 2, y: 1 }));
          coordinates.push(main.methods.getposition(position, { x: 2, y: -1 }));
          coordinates.push(main.methods.getposition(position, { x: -2, y: -1 }));
          coordinates.push(main.methods.getposition(position, { x: -2, y: 1 }));

          break;
        case 'rook':

          break;
        case 'w_pawn':

          // calculate pawn options
          if (main.variables.pieces[selectedpiece].moved == false) {
            coordinates.push(main.methods.getposition(position, { x: 0, y: 1 }));
            coordinates.push(main.methods.getposition(position, { x: 0, y: 2 }));
            coordinates.push(main.methods.getposition(position, { x: 1, y: 1 }));
            coordinates.push(main.methods.getposition(position, { x: -1, y: 1 }));
          }
          else if (main.variables.pieces[selectedpiece].moved == true) {
            coordinates.push(main.methods.getposition(position, { x: 0, y: 1 }));
            coordinates.push(main.methods.getposition(position, { x: 1, y: 1 }));
            coordinates.push(main.methods.getposition(position, { x: -1, y: 1 }));
          }

          break;

        case 'b_pawn':

          // calculate pawn options
          if (main.variables.pieces[selectedpiece].moved == false) {
            coordinates.push(main.methods.getposition(position, { x: 0, y: -1 }));
            coordinates.push(main.methods.getposition(position, { x: 0, y: -2 }));
            coordinates.push(main.methods.getposition(position, { x: 1, y: -1 }));
            coordinates.push(main.methods.getposition(position, { x: -1, y: -1 }))
          }
          else if (main.variables.pieces[selectedpiece].moved == true) {
            coordinates.push(main.methods.getposition(position, { x: 0, y: -1 }));
            coordinates.push(main.methods.getposition(position, { x: 1, y: -1 }));
            coordinates.push(main.methods.getposition(position, { x: -1, y: -1 }))
          }

          break;
        default:

          break;
      }

      options = (main.methods.checkoptions(startpoint, coordinates, main.variables.pieces[selectedpiece].type)).slice(0);
      main.variables.highlighted = options.slice(0);
      main.methods.highlight_options(options);

    },

    getposition: function(position, increment) {
      let x = parseInt(position.x) + parseInt(increment.x);
      let y = parseInt(position.y) + parseInt(increment.y);
      return x + '_' + y;
    },

    checkoptions: function(startpoint, coordinates, piecetype) { // first check if any of the possible coordinates is out of bounds;
        
      coordinates = coordinates.filter(val => {
        let pos = { x: 0, y: 0 };
        pos.x = parseInt(val.split('_')[0]);
        pos.y = parseInt(val.split('_')[1]);

        if (!(pos.x < 1) && !(pos.x > 8) && !(pos.y < 1) && !(pos.y > 8)) { // if it is not out of bounds, return the coordinate;
          return val;
        }
      });

      switch (piecetype) {

        case 'w_knight':

        coordinates = coordinates.filter(val => {
            return ($('#' + val).attr('chess') == 'null' || ($('#' + val).attr('chess')).slice(0,1) == 'b');
          });

          break;

        case 'w_pawn':

            coordinates = coordinates.filter(val => {
              let sp = { x: 0, y: 0 };
              let coordinate = val.split('_');

              sp.x = startpoint.split('_')[0];
              sp.y = startpoint.split('_')[1];
              
              if (coordinate[0] < sp.x || coordinate[0] > sp.x){ // if the coordinate is on either side of the center, check if it has an opponent piece on it;
                return ($('#' + val).attr('chess') != 'null' && ($('#' + val).attr('chess')).slice(0,1) == 'b'); // return coordinates with opponent pieces on them
              } else { // else if the coordinate is in the center;
                if (coordinate[1] == (parseInt(sp.y) + 2) && $('#' + sp.x + '_' + (parseInt(sp.y) + 1)).attr('chess') != 'null'){
                  // do nothing if this is the pawns first move, and there is a piece in front of the 2nd coordinate;
                } else {
                  return ($('#' + val).attr('chess') == 'null'); // otherwise return the coordinate if there is no chess piece on it;
                }
              }
                          
            });
         
          break;

        case 'b_pawn':

          coordinates = coordinates.filter(val => {
            let sp = { x: 0, y: 0 };
            let coordinate = val.split('_');

            sp.x = startpoint.split('_')[0];
            sp.y = startpoint.split('_')[1];
            
            if (coordinate[0] < sp.x || coordinate[0] > sp.x){ // if the coordinate is on either side of the center, check if it has an opponent piece on it;
              return ($('#' + val).attr('chess') != 'null' && ($('#' + val).attr('chess')).slice(0,1) == 'w'); // return coordinates with opponent pieces on them
            } else { // else if the coordinate is in the center;
              if (coordinate[1] == (parseInt(sp.y) - 2) && $('#' + sp.x + '_' + (parseInt(sp.y) - 1)).attr('chess') != 'null'){
                // do nothing if this is the pawns first move, and there is a piece in front of the 2nd coordinate;
              } else {
                return ($('#' + val).attr('chess') == 'null'); // otherwise return the coordinate if there is no chess piece on it;
              }
            }
          });

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
