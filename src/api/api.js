import { fetchJson } from './api-helpers'
// import { yellow } from 'logger'

export default {
  members: {
    create() {
      // log('api.members.create: member', member, 'orange')
      return fetchJson(
        '/members',
        {
          method: 'POST',
        }
      ).then((id) => {
        return id
      })
    },
    read() {
      // yellow('** read **')
      return fetchJson(
        '/members',
        { method: 'GET' }
      )
    },
    update(id, member) {
      //ku.log('api.members.update: id', id, 'orange')
      //ku.log('api.members.update: member', member, 'orange')
      member.status = null
      return fetchJson(
        `/members/${id}`,
        {
          method: 'PUT',
          body: JSON.stringify({ member })
        }
      )
    },
    delete(id) {
      return fetchJson(
        `/members/${id}`,
        {
          method: 'DELETE'
        }
      )
      .then((data) => {
        // console.log(data)
        return data.affectedRows ? id : -1
      })
    },
  },
};
