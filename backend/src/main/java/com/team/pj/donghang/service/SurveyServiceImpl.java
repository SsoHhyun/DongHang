package com.team.pj.donghang.service;

import com.team.pj.donghang.api.request.SurveyRequestDto;
import com.team.pj.donghang.domain.entity.Survey;
import com.team.pj.donghang.domain.entity.User;
import com.team.pj.donghang.repository.SurveyRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service("survey service")
public class SurveyServiceImpl implements SurveyService{
    @Autowired
    SurveyRepository surveyRepository;

    @Override
    public void surveyCreateAUpdate(User user, SurveyRequestDto survey) {
        Survey survey1 = surveyRepository.findByUser(user);
        if(survey1==null){
            survey1 = Survey.builder()
                    .user(user)
                    .survey1(survey.getSurvey_1())
                    .survey2(survey.getSurvey_2())
                    .survey3(survey.getSurvey_3())
                    .survey4(survey.getSurvey_4())
                    .survey5(survey.getSurvey_5())
                    .survey6(survey.getSurvey_6())
                    .survey7(survey.getSurvey_7())
                    .survey8(survey.getSurvey_8())
                    .build();

        }else{
            survey1.setSurvey1(survey.getSurvey_1());
            survey1.setSurvey2(survey.getSurvey_2());
            survey1.setSurvey3(survey.getSurvey_3());
            survey1.setSurvey4(survey.getSurvey_4());
            survey1.setSurvey5(survey.getSurvey_5());
            survey1.setSurvey6(survey.getSurvey_6());
            survey1.setSurvey7(survey.getSurvey_7());
            survey1.setSurvey8(survey.getSurvey_8());

        }
        surveyRepository.save(survey1);

    }
}
