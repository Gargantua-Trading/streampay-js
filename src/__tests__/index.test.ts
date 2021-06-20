import Streampay from '../index';

const validApiKey = 'ey9NBgdV+U/8KGgfKBfyy5ddXYriI4zCxso3uG+ejtPFOAArx40Tbseih1/jtcTnTK0UD+B8wELfn2ksmP7/YnBTrmnEMlrAI6zwY/nz4cb8Xo6g2kt5jBElhhjn9h/VkEipd9D9RtVDJks=';

test('Register an event', async () => {
  const result = await Streampay.recordCpaEvent(validApiKey, 'testPromo', 'local');
  expect(result.status).toBe(true);
});