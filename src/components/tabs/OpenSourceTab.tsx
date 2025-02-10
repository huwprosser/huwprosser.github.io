export default function OpenSourceTab() {
    return (
        <div className="os-projects">
            <table className="os-project">
                <tbody>
                    <tr className="os-title-box">
                        <th>Jarvis MLX</th>
                    </tr>
                    <tr>
                        <td>
                            <div className="project-content">
                                <p className="project-description">
                                    A basic starter project for people wanting
                                    to build an AI assistant on Apple Silicon.
                                    It includes ASR, LLM & TTS.
                                </p>
                                <a
                                    className="os-button"
                                    target="_blank"
                                    rel="noopener"
                                    href="https://github.com/huwprosser/jarvis-mlx"
                                >
                                    GitHub
                                </a>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>

            <table className="os-project">
                <tbody>
                    <tr className="os-title-box">
                        <th>Clap Detection</th>
                    </tr>
                    <tr>
                        <td>
                            <div className="project-content">
                                <p className="project-description">
                                    A clap detection model using a ConvNet.
                                    Designed to replicate the functionality seen
                                    in Iron Man 2. Built{" "}
                                    <a
                                        href="https://youtu.be/OBodG-6YEMo?si=HplOFHEMJWN87rOo"
                                        target="_blank"
                                        rel="noopener"
                                    >
                                        LIVE on TikTok
                                    </a>
                                    .
                                </p>
                                <a
                                    className="os-button"
                                    target="_blank"
                                    rel="noopener"
                                    href="https://github.com/huwprosser/clap-detection"
                                >
                                    GitHub
                                </a>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>

            <table className="os-project">
                <tbody>
                    <tr className="os-title-box">
                        <th>Cluster-Fk</th>
                    </tr>
                    <tr>
                        <td>
                            <div className="project-content">
                                <p className="project-description">
                                    Image clustering with KNN. Used for face
                                    recognition projects and image sorting.
                                </p>
                                <a
                                    className="os-button"
                                    target="_blank"
                                    rel="noopener"
                                    href="https://github.com/huwprosser/cluster-fk"
                                >
                                    GitHub
                                </a>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>

            <table className="os-project">
                <tbody>
                    <tr className="os-title-box">
                        <th>Web Whisper</th>
                    </tr>
                    <tr>
                        <td>
                            <div className="project-content">
                                <p className="project-description">
                                    Whisper ASR in the browser. Using a FastAPI
                                    server, Websockets and voice activity
                                    detection.
                                </p>
                                <a
                                    className="os-button"
                                    target="_blank"
                                    rel="noopener"
                                    href="https://github.com/huwprosser/web-whisper"
                                >
                                    GitHub
                                </a>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
