export default function Skills() {
  return (
    <div className="container mx-auto py-10 px-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Skills</h2>
      <table className="skills-table">
        <tbody>
          <tr>
            <td>OS</td>
            <td>Windows, macOS, Ubuntu</td>
          </tr>
          <tr>
            <td>言語</td>
            <td>Java, C#, Ruby, JavaScript, PHP, HTML, CSS, ShellScript</td>
          </tr>
          <tr>
            <td>フレームワーク</td>
            <td>
              Spring, CakePHP, Drupal, BEAR.Sunday, Ruby on Rails, React, React
              Native
            </td>
          </tr>
          <tr>
            <td>DB</td>
            <td>MySQL, PostgreSQL</td>
          </tr>
          <tr>
            <td>その他</td>
            <td>Git, SVN, Vagrant, Docker, Apache, Samba, AWS</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
