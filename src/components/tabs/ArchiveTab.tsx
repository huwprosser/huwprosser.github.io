export default function ArchiveTab() {
    return (
        <table className="project">
            <colgroup>
                <col span={5} width="16.67%" />
                <col width="16.67%" />
            </colgroup>
            <tbody>
                <tr>
                    <th colSpan={5}>
                        <h4 className="project-title">Blooware Technologies</h4>
                    </th>
                    <td colSpan={1}>
                        <p className="project-description pad-5">Est. 2016</p>
                    </td>
                </tr>
                <tr>
                    <td colSpan={6}>
                        <div className="project-content">
                            <p className="project-description">
                                At age 17, I started Blooware to automate SMEs
                                in the UK with Machine Learning. We worked with
                                companies in E-commerce, consumer apps, sports,
                                construction logistics, construction and UXO.
                                Blooware wrapped up in 2021. We successfully
                                worked over multiple years with 10+ companies.
                            </p>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}
