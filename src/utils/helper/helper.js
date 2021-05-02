//reusable
export default class Filter {
    static filterRegoList(list) {
        if (list && list.length) {
            list.forEach((i) => {
                //Mask VIN number, and add this property into list
                i.vehicle.vin_mask = '*************' + i.vehicle.vin.slice(-4);
            });
        }
        return list;
    }
}

