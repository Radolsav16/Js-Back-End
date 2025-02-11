import Planet from "../models/Planet.js";

export async function createPlanet(data){
      await Planet.create(data)
}