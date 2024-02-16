import helloWorld from ".."
import { UID2, EventType } from '@uid2/uid2-sdk'

const test: UID2 = {
    foo: 'bar'
}

const anotherTest = EventType.IdentityUpdated;

console.log(helloWorld())