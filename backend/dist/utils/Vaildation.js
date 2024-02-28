import Ajv from 'ajv';
export const validateSongsJson = (data) => {
    const ajv = new Ajv.default({ allErrors: true });
    const schema = {
        type: "array",
        items: {
            type: 'object',
            properties: {
                title: { type: 'string' },
                singer: { type: 'string' },
                url: { type: 'string' },
                file_format: { type: 'string' },
                photo: { type: 'string' },
                chapter: { type: 'string' },
            },
            required: ['title', 'singer', 'url', 'photo'],
            additionalProperties: false
        }
    };
    const validate = ajv.compile(schema);
    const valid = validate(JSON.parse(data));
    return valid;
};
