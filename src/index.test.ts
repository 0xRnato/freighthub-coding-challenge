import { expect } from "chai";
import ShipmentUpdateListener from './index';

describe("ShipmentUpdateListener", () => {
  it("The second update should begin after the first update completes.", async () => {
    const shipmentUpdateListener = new ShipmentUpdateListener();
    const resA1 = await shipmentUpdateListener.receiveUpdate('a', 1);
    const resA2 = await shipmentUpdateListener.receiveUpdate('a', 2);
    const resB1 = await shipmentUpdateListener.receiveUpdate('b', 1);
    const resB2 = await shipmentUpdateListener.receiveUpdate('b', 2);
    expect(resA1.endTime < resA2.startTime).to.be.true;
    expect(resA2.endTime < resB1.startTime).to.be.true;
    expect(resB1.endTime < resB2.startTime).to.be.true;
  });
});
