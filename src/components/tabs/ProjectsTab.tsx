export default function ProjectsTab() {
    return (
        <>
            <table className="project">
                <colgroup>
                    <col span={5} width="16.67%" />
                    <col width="16.67%" />
                </colgroup>
                <tbody>
                    <tr>
                        <th colSpan={5}>
                            <h4 className="project-title">Carter Labs</h4>
                        </th>
                        <td colSpan={1}>
                            <p className="project-description pad-5">
                                Est. 2022
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={6}>
                            <div className="project-content">
                                <p className="project-description">
                                    A UK-based startup founded in 2022
                                    (pre-ChatGPT) to explore how AI could be
                                    used in video games via an API. Gaining fast
                                    prosumer adoption we raised a{" "}
                                    <a
                                        href="https://www.uktech.news/ai/carter-pre-seed-20221220"
                                        target="_blank"
                                        rel="noopener"
                                    >
                                        $2-million pre-seed
                                    </a>
                                    . We discovered that AI characters were an
                                    incredibly compelling experience outside of
                                    games too. Our latest direct-to-consumer app
                                    and website, carter.chat allows users to
                                    create, meet and share characters powered by
                                    state-of-the-art AI.
                                </p>
                                <a
                                    className="button"
                                    target="_blank"
                                    rel="noopener"
                                    href="https://carter.chat?utm_source=huwprosser.github.io"
                                >
                                    VISIT SITE
                                </a>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>

            <table className="project">
                <colgroup>
                    <col span={5} width="16.67%" />
                    <col width="16.67%" />
                </colgroup>
                <tbody>
                    <tr>
                        <th colSpan={5}>
                            <h4 className="project-title">
                                J.A.R.V.I.S - In Real Life
                            </h4>
                        </th>
                        <td colSpan={1}>
                            <p className="project-description pad-5">
                                Est. 2008
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={6}>
                            <div className="project-content">
                                <p className="project-description">
                                    In 2008 Tony Stark's Jarvis appeared in the
                                    first Iron Man movie. I've been working on a
                                    real-life version ever since. In 2020 I
                                    began documenting this passion on TikTok.
                                    This quickly led to viral success as people
                                    shared their interest in the project. If I'm
                                    being honest, despite recent advancements in
                                    AI, this is a project I just can't put down.
                                </p>
                                <a
                                    className="button"
                                    target="_blank"
                                    rel="noopener"
                                    href="https://tiktok.com/@huwprosser"
                                >
                                    WATCH NOW
                                </a>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}
