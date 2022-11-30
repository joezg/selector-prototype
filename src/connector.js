export const loadModel = async () => {
    //just a dummy implementation

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                availableProducts: ["c1", "c2", "c3"],
                products: {
                    c1: {
                        name: "C1",
                        options: ["o1", "o2", "o3"]
                    },
                    c2: {
                        name: "C2",
                        options: ["o3", "o4"]
                    },
                    c3: {
                        name: "C3",
                        options: ["o1", "o4"]
                    }
                },
                options: {
                    o1: {
                        name: "Frame",
                        values: [
                            {
                                id: "o1-1",
                                name: "wood1",
                                img: "",
                                description: ""
                            },
                            {
                                id: "o1-2",
                                name: "wood2",
                                img: "",
                                description: ""
                            }
                        ]
                    },
                    o2: {
                        name: "Seat",
                        values: [
                            {
                                id: "o2-1",
                                name: "seat1",
                                img: "",
                                description: ""
                            },
                            {
                                id: "o2-2",
                                name: "seat2",
                                img: "",
                                description: ""
                            }
                        ]
                    },
                    o3: {
                        name: "Something else",
                        values: [
                            {
                                id: "o3-1",
                                name: "se1",
                                img: "",
                                description: ""
                            },
                            {
                                id: "o3-2",
                                name: "se2",
                                img: "",
                                description: ""
                            }
                        ]
                    },
                    o4: {
                        name: "Another",
                        values: [
                            {
                                id: "o4-1",
                                name: "a1",
                                img: "",
                                description: ""
                            },
                            {
                                id: "o4-2",
                                name: "a2",
                                img: "",
                                description: ""
                            }
                        ]
                    },
                }
            })
        }, 2000)
    })
}

export const changeProduct = productId => {
    //send something to Babylon
    console.log("Product changed:" + productId);
}

export const changeProductOption = (productId, optionId, value) => {
    //send something to Babylon
    console.log(`Product ${productId} option ${optionId} changed: ${value}`);
}