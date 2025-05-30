import React from "react";
import "./Comments";

export default function Comments() {
  const addComment = () => {};
  return (
    <div class="comments">
      <br />
      <span class="comments__title">دیدگاهتان را بنویسید</span>

      <div class="comments_content">
        <span class="comments__content-title">دیدگاه *</span>
        <textarea class="comments__content-textarea"></textarea>
      </div>
      <button type="submit" class="comments__button">
        فرستادن دیدگاه
      </button>
    </div>
  );
}
