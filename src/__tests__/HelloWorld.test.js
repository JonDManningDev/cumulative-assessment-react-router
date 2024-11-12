import { HelloWorld } from '../HelloWorld';

describe('HelloWorld', () => {
    test('renders correctly', () => {
        expect(HelloWorld()).toBe('Hello, World!');
    });
});