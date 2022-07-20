const initialState = {
  alldogs: [],
  byfilter: [],
  temperaments: [],
  detail: {},
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_DOGS":
      return {
        ...state,
        alldogs: action.payload,
        byfilter: action.payload,
      };

    case "FILTER_CREATED":
      const dogs2 = state.byfilter;
      let createdFilter;
      if (action.payload === "Creado") {
        createdFilter = dogs2.filter((el) => el.createdInDb);
      } else if (action.payload === "Existente") {
        createdFilter = dogs2.filter((el) => !el.createdInDb);
      }
      return {
        ...state,
        alldogs: createdFilter,
      };



    case "GET_TEMPERAMENTS":
      return {
        ...state,
        temperaments: action.payload,
      };

    case "ORDER_BY_NAME":
      let sortedArr =
        action.payload === "ascendente"
          ? state.alldogs.sort(function (a, b) {
              if (a.name > b.name) {
                return 1;
              }
              if (b.name > a.name) {
                return -1;
              }
              return 0;
            })
          : state.alldogs.sort(function (a, b) {
              if (a.name > b.name) {
                return -1;
              }
              if (b.name > a.name) {
                return 1;
              }
            });
      return {
        ...state,
        alldogs: sortedArr,
      };

    case "GET_NAME_DOG":
      return {
        ...state,
        alldogs: action.payload,
      };

    case "DOGS_CREATED":
      return {
        ...state,
      };

    case "GET_DETAILS":
      return {
        ...state,
        detail: action.payload,
      };

    case "ORDER_BY_TEMPERAMENT":
      const filterTemp = state.byfilter.filter((dog) => {
        if (!dog.temperaments) return undefined;
        return dog.temperaments.includes(`${action.payload}`);
      });
      return {
        ...state,
        alldogs: filterTemp,
      };

      case 'ORDER_BY_PESO_MIN':
            
        let resultsMin = state.byfilter.sort((a,b) => parseInt(a.weight[0]) - parseInt(b.weight[0]))

        console.log(resultsMin)
            return {
                ...state,
                alldogs: resultsMin 
            }
        case 'ORDER_BY_PESO_MAX':
            let resultsMax = state.byfilter.sort((a,b) => parseInt(b.weight[0]) - parseInt(a.weight[0]))
  
            console.log(resultsMax)
            return {
                ...state,
                alldogs: resultsMax
            };












    // case "ORDER_BY_PESO":
    //   const byPeso = state.byfilter;
    //   const allfilter= action.payload === "min"?
    //   byPeso.sort((a,b) =>{
    //     const pesoA = parseInt(a.weight)
    //     const pesoB = parseInt(b.weight)
    //     if(pesoA < pesoB) return -1
    //     if(pesoA > pesoB) return 1
    //      return 0
    //   }):
    //   byPeso.sort((a,b) =>{
    //     const pesoA = parseInt(a.weight)
    //     const pesoB = parseInt(b.weight)
    //     if(pesoA > pesoB) return -1
    //     if(pesoA < pesoB) return 1
    //      return 0
    //   })
    //   console.log(allfilter)
    //   return {
    //     ...state,
    //     alldogs: allfilter,
    //   };



    // case 'ORDER_BY_PESO_MAX':
      

    //   return {
    //     ...state,
    //     alldogs: resultMax1,
    //   };

    
    default:
      return state;
  }
}

export default rootReducer;


// case FILTER_WEIGHT: 
//             const allDogs = state.dogs;
//             const weightFiltered = action.payload === "Ascendente"
//             ? allDogs.sort((a,b) => {
//                 const pesoA = Number(a.peso.split("-")[0])
//                 const pesoB = Number(b.peso.split("-")[0])
//                 if(pesoA < pesoB) return -1
//                 if(pesoA > pesoB) return 1
//                 return 0
//             })
//             : allDogs.sort((a,b) => {
//                 const pesoA = a.peso.split("-")
//                 const pesoB = b.peso.split("-")
//                 if(pesoA.length < 2 && pesoB.length < 2){
//                     if(Number(pesoB) < Number(pesoA)) return -1
//                     if(Number(pesoB) > Number(pesoA)) return 1
//                     return 0
//                 } 
//                 if(pesoA.length < 2){
//                     if(Number(pesoB[1]) < Number(pesoA)) return -1
//                     if(Number(pesoB[1]) > Number(pesoA)) return 1
//                     return 0
//                 }
//                 if(pesoB.length < 2){
//                     if(Number(pesoB) < Number(pesoA[1])) return -1
//                     if(Number(pesoB) > Number(pesoA[1])) return 1
//                     return 0
//                 }
//                     if(Number(pesoB[1]) < Number(pesoA[1])) return -1
//                     if(Number(pesoB[1]) > Number(pesoA[1])) return 1
//                     return 0
//             })
//             return {
//                 ...state,
//                 dogs: weightFiltered
//             };