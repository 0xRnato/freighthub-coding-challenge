async function sleep(ms: number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), ms);
  });
}

async function randomDelay() {
  const randomTime = Math.round(Math.random() * 1000);
  return sleep(randomTime);
}

class ShipmentSearchIndex {
  async updateShipment(id: string, shipmentData: any) {
    const startTime = new Date();
    await randomDelay();
    const endTime = new Date();
    console.log(
      `update ${id}@${startTime.toISOString()} finished@${endTime.toISOString()}`
    );
    return { startTime, endTime };
  }
}

// Implementation needed
interface ShipmentUpdateListenerInterface {
  receiveUpdate(id: string, shipmentData: any);
}

class ShipmentUpdateListener implements ShipmentUpdateListenerInterface {
  async receiveUpdate(id: string, shipmentData: any): Promise<void> {
    await new ShipmentSearchIndex().updateShipment(id, shipmentData);
  }
}

interface IShipmentUpdateData {
  id: string;
  shipmentData: any;
}

class Queue {
  queueItems: Array<IShipmentUpdateData>;

  constructor() {
    this.queueItems = [];
  }

  add(id: string, shipmentData: any): void {
    this.queueItems.push({ id, shipmentData });
  }

  async process(): Promise<void> {
    const s = new ShipmentUpdateListener();
    for (const item of this.queueItems) {
      await s.receiveUpdate(item.id, item.shipmentData);
    }
  }
}

const queue = new Queue();
queue.add("1", 1);
queue.add("1", 2);
queue.add("1", 3);
queue.add("1", 4);
queue.add("1", 5);
queue.add("2", 1);
queue.add("2", 2);
queue.add("2", 3);
queue.add("2", 4);
queue.add("2", 5);
queue.process();

export default ShipmentUpdateListener;
