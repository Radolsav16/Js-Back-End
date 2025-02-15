import Planet from "../models/Planet.js";

export async function createPlanet(data){
      await Planet.create(data)
}

export async function getAll() {
      return Planet.find().lean();
}

export async function getOnePlanet(_id) {
 return Planet.findById({_id}).lean();
}


export async function deleteOnePlanet(_id) {
      return Planet.findByIdAndDelete({_id});
}

export async function editPlanet(_id,newData) {
      return Planet.findByIdAndUpdate({_id},newData)
}