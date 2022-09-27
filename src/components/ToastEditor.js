// Toast 에디터
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/i18n/ko-kr';
import {useRef,createRef} from "react";

function EditorBox() {
  const editorRef = createRef();
  return (
    <Editor
      initialValue=" 질문을 작성하세요. "
      previewStyle="vertical"
      height="450px"
      initialEditType="wysiwyg"
      hideModeSwitch="true"
      language="ko-KR"
      useCommandShortcut={true}
      ref={editorRef}
    />
  );
}

export default EditorBox;
