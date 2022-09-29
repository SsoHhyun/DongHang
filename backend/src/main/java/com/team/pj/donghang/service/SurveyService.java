package com.team.pj.donghang.service;

import com.team.pj.donghang.api.request.SurveyRequestDto;
import com.team.pj.donghang.domain.entity.User;

public interface SurveyService {
    void surveyCreateAUpdate(User user, SurveyRequestDto survey);
}
