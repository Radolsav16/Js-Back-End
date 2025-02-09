import Device from "../models/Devices.js";

export async function createDevice(data){
    await Device.create(data)
}

export async function getFeatured() {
    const data = (await Device.find().lean()).reverse().slice(0,3);
    
    return data;
}


export async function getAllDevices() {
    const data = (await Device.find().lean());
    
    return data;
}

export async function getSpecificDevice(id) {
    const data = (await Device.findOne({_id:id}).lean());
    return data;
}

export async function editDevice(id,data) {
    await Device.findByIdAndUpdate({_id:id},data);
}


export async function deleteDevice(id) {
    await Device.findByIdAndDelete({_id:id});
}

export async function getCreatedProductsForUser(userId) {
    const createdProducts = await Device.find({ owner:userId }).lean()
    console.log(createdProducts)

}

export async function getPreferProducts(userId,name){
    console.log(await Device.find({preferredList:userId}).populate('owner',name))
    return await Device.find({preferredList:userId}).populate('owner',name)
}