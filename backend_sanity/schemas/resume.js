export default {
    name: 'resume',
    title: 'Resume',
    type: 'document',
    fields: [
      {
        name: 'resume',
        title: 'Resume',
        type: 'file',
        description: 'Upload the resume file here',
        validation: (Rule) => Rule.required(),
        options: {
          accept: 'application/pdf',
        },
      },
      {
        name:'name',
        title:'Name',
        type:'string'
    }
    ],
  };