const React = require('react')
const { connect } = require('react-redux')

function MeetingPoint () {
  return (
    <div>
      <h1>This is the meeting point Component </h1>
      <form>
        <div>
          My:
          <input className='' type='text' ref='safe point' placeholder='Safe Point' />
        </div>
        <div>
          Group:
          <input className='' type='text' ref='meeting point' placeholder='Meeting Point' />
          <input className='' type='text' ref='safe point' placeholder='Safe Point' />
        </div>
        <button>Submit</button>
      </form>
    </div>
  )
}

module.exports = MeetingPoint
