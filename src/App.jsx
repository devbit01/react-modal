import { useState } from 'react'

function App() {
    const [modalOpen, setModalOpen] = useState(false)
    return (
        <div className="App">
            <button onClick={() => setModalOpen(true)}>Click Me</button>
            {modalOpen && (
                <div className="modal-bg" onClick={() => setModalOpen(false)}>
                    <div className="modal">Click to close</div>
                </div>
            )}
        </div>
    )
}

export default App
