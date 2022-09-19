// Toast 에디터
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/i18n/ko-kr';



function EditorBox() {
  return (
      <Editor
          initialValue="hello react"
          previewStyle="vertical"
          height="450px"
          initialEditType="wysiwyg"
          useCommandShortcut={false}
          hideModeSwitch="true"
          language="ko-KR"
      />
  );
}

export default EditorBox;
