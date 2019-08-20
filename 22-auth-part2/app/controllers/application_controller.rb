class ApplicationController < ActionController::Base

  helper_method :logged_in?

  def redirected_user
    if !logged_in?
      redirect_to login_path
    end
  end

  def logged_in?
    !!session[:teacher_id]
  end

  def set_user
    if logged_in?
      @teacher = Teacher.find_by(id: session[:teacher_id])
    end
  end

end
